import { jest } from '@jest/globals';
import UserService from '../../src/user/user.service';
import userRepository from '../../src/user/user.repository';
import { generateHash } from '../../src/utils/generateHash';
import { UpdateUserDto } from '../../src/user/validations/update-user';

jest.mock('../../src/user/user.repository');
jest.mock('../../src/utils/generateHash');

describe('UserService', () => {

    const mockedUserRepository = userRepository as jest.Mocked<typeof userRepository>;
    const mockedGenerateHash = generateHash as jest.MockedFunction<typeof generateHash>;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should create a new user successfully', async () => {

        //objeto que irá simular os dados enviados
        const mockCreateUserDto = { email: 'jmcsjoaomarcos@gmail.com', password: '123456' };

        //configuramos para que esse método retorne null do repositório mockado
        mockedUserRepository.findByEmail.mockResolvedValue(null);

        //gera o hash da senha
        mockedGenerateHash.mockResolvedValue(mockCreateUserDto.password);

        //configuramos para o que retorne true na criação do usuário
        mockedUserRepository.create.mockResolvedValue(true);

        const result = await UserService.create(mockCreateUserDto);

        //verifica se o método foi chamado com o email do Dto
        expect(userRepository.findByEmail).toHaveBeenCalledWith(mockCreateUserDto.email);

        //verifica se gerou a senha 
        expect(generateHash).toHaveBeenCalledWith(mockCreateUserDto.password);

        //verifica se foi criado com o dto do mock
        expect(userRepository.create).toHaveBeenCalledWith({ ...mockCreateUserDto });

        expect(result).toBe(true);
    });

    it('should throw an error if email is already in use', async () => {
  
        const mockCreateUserDto = { email: 'jmcsjoaomarcos@gmail.com', password: '123456' };
    
        //configuramos o repositório mockado para retornar um usuário existente
        mockedUserRepository.findByEmail.mockResolvedValue({
            id: 1, email: 'jmcsjoaomarcos@gmail.com',
            name: '',
            password: ''
        });
    
        //verificamos se o serviço lança um erro ao tentar criar um usuário com um email já existente
        await expect(UserService.create(mockCreateUserDto)).rejects.toThrow('Email in use by another user');
    });
    
    it('should update a user successfully', async () => {

        const mockUpdateUserDto: UpdateUserDto = { name: 'Updated', email: 'updated@jmcsjoaomarcos.com' };
        const mockUserId = 1;
    
        //configuramos o repositório mockado para retornar um usuário existente
        mockedUserRepository.findById.mockResolvedValue({
            id: mockUserId,
            name: '',
            email: '',
            password: ''
        });
    
        //configuramos o repositório mockado para retornar true
        mockedUserRepository.update.mockResolvedValue(true);
    
        //executamos a função de atualização
        const result = await UserService.update(mockUserId, mockUpdateUserDto);
    
        //verificamos se os métodos corretos foram chamados com os parâmetros corretos e verificamos se o resukt é true
        expect(userRepository.findById).toHaveBeenCalledWith(mockUserId);
        expect(userRepository.update).toHaveBeenCalledWith(mockUserId, mockUpdateUserDto);
        expect(result).toBe(true);
    });
    
    it('should throw an error if user to update is not found', async () => {
  
        const mockUpdateUserDto: UpdateUserDto = { name: 'Updated', email: 'updated@gmail.com' };
        const mockUserId = 1;
    
        //configuramos o repositório mockado para retornar null
        mockedUserRepository.findById.mockResolvedValue(null);
    
        //verificamos se o service lança um erro ao atualizar um usuário inexistente
        await expect(UserService.update(mockUserId, mockUpdateUserDto)).rejects.toThrow('User not found');
    });
    
    it('should throw an error if there is an error updating the user', async () => {

        const mockUpdateUserDto: UpdateUserDto = { name: 'Updated', email: 'updated@gmail.com' };
        const mockUserId = 1;
    
        //configuramos o repositório mockado para retornar um usuário existente
        mockedUserRepository.findById.mockResolvedValue({
            id: mockUserId,
            name: '',
            email: '',
            password: ''
        });
    
        //configuramos o repositório mockado para retornar false
        mockedUserRepository.update.mockResolvedValue(false);
    
        //verificamos se o serviço lança um erro ao tentar atualizar um usuário e a operção falha
        await expect(UserService.update(mockUserId, mockUpdateUserDto)).rejects.toThrow('Error at data change');
    });
    
    it('should delete a user successfully', async () => {
        
        const mockUserId = 1;
    
        //configuramos o repositório mockado para retornar um usuário existente
        mockedUserRepository.findById.mockResolvedValue({
            id: mockUserId,
            name: '',
            email: '',
            password: ''
        });
    
        //configuramos o repositório mockado para retornar true
        mockedUserRepository.delete.mockResolvedValue(true);
    
        //executamos a função de exclusão do serviço
        const result = await UserService.delete(mockUserId);
    
        // Verificamos se os métodos corretos foram chamados com os parâmetros esperados
        expect(userRepository.findById).toHaveBeenCalledWith(mockUserId);
        expect(userRepository.delete).toHaveBeenCalledWith(mockUserId);
        expect(result).toBe(true);
    });
    
    it('should throw an error if user to delete is not found', async () => {

        const mockUserId = 1;
    
        //configuramos o repositório mockado para retornar null
        mockedUserRepository.findById.mockResolvedValue(null);
    
        //verificamos se o serviço lança um erro ao tentar deletar um usuário inexistente
        await expect(UserService.delete(mockUserId)).rejects.toThrow('User not found');
    });
    
    it('should throw an error if there is an error deleting the user', async () => {
        const mockUserId = 1;
    
        //configuramos o repositório mockado para retornar um usuário existente
        mockedUserRepository.findById.mockResolvedValue({
            id: mockUserId,
            name: '',
            email: '',
            password: ''
        });
    
        //configuramos o repositório mockado para retornar false
        mockedUserRepository.delete.mockResolvedValue(false);
    
        //verificamos se o serviço lança um erro ao tentar deletar um usuário e a operação falha
        await expect(UserService.delete(mockUserId)).rejects.toThrow('Error at exclude data');
    });
});