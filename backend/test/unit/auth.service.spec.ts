import { jest } from '@jest/globals';
import AuthService from '../../src/auth/auth.service';
import userService from '../../src/user/user.service';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { env } from '../../src/environment/env';
import { AuthRequestDto } from '../../src/auth/interfaces/auth-payload.dto';

jest.mock('../../src/user/user.service');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('AuthService', () => {
    const mockedUserService = userService as jest.Mocked<typeof userService>;
    const mockedBcrypt = bcrypt as jest.Mocked<typeof bcrypt>;
    const mockedSign = sign as jest.MockedFunction<typeof sign>;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should sign in successfully and return an access token', async () => {
        const mockAuthRequestDto: AuthRequestDto = { email: 'jmcsjoaomarcos@gmail.com', password: '123456' };

        const mockUser = {
            id: null,
            name: '',
            email: 'jmcsjoaomarcos@gmail.com',
            password: '123456'
        };

        mockedUserService.findOneByEmail.mockResolvedValue(mockUser);
        mockedBcrypt.compare.mockResolvedValue(true);
        mockedSign.mockReturnValue('mockedAccessToken');

        const result = await AuthService.signin(mockAuthRequestDto);

        expect(userService.findOneByEmail).toHaveBeenCalledWith(mockAuthRequestDto.email);
        expect(bcrypt.compare).toHaveBeenCalledWith(mockAuthRequestDto.password, mockUser.password);
        expect(sign).toHaveBeenCalledWith(
            { name: mockUser.name, email: mockUser.email, id: mockUser.id, type: 'access' },
            env.TOKEN_SECRET,
            { expiresIn: env.TOKEN_EXPIRATION }
        );
        expect(result).toEqual({ accessToken: 'mockedAccessToken' });
    });

    it('should throw an error if user is not found', async () => {
        const mockAuthRequestDto: AuthRequestDto = { email: 'notfound@gmail.com', password: 'password123' };

        mockedUserService.findOneByEmail.mockResolvedValue(null);

        await expect(AuthService.signin(mockAuthRequestDto)).rejects.toThrow('User not found');
    });

    it('should throw an error if password is incorrect', async () => {
        const mockAuthRequestDto: AuthRequestDto = { email: 'jmcsjoaomarcos@gmail.com', password: 'incorretPass' };

        const mockUser = {
            id: 1,
            name: '',
            email: 'jmcsjoaomarcos@gmail.com',
            password: '123456'
        };

        mockedUserService.findOneByEmail.mockResolvedValue(mockUser);
        mockedBcrypt.compare.mockResolvedValue(false);

        await expect(AuthService.signin(mockAuthRequestDto)).rejects.toThrow('Password invalid');
    });
});