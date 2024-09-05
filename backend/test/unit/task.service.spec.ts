import { jest } from '@jest/globals';
import TaskService from '../../src/task/task.service';
import taskRepository from '../../src/task/task.repository';
import { UpdateTaskDto } from '../../src/task/validations/update-task';
import { CreateTaskDto } from '../../src/task/validations/create-task';
import { Task } from '../../src/entities/task.entity';

jest.mock('../../src/task/task.repository');

describe('TaskService', () => {

    const mockedTaskRepository = taskRepository as jest.Mocked<typeof taskRepository>;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should create a new task successfully', async () => {


        const mockCreateTaskDto: CreateTaskDto = { title: 'title', userId: 1, description: "description" };

        //configuramos o repositório mockado para retornar true na criação da tarefa
        mockedTaskRepository.create.mockResolvedValue(true);

        //executamos a função de criação do serviço
        const result = await TaskService.create(mockCreateTaskDto);

        //verificamos se o método de criação foi chamado com os dados corretos
        expect(taskRepository.create).toHaveBeenCalledWith(mockCreateTaskDto);

        expect(result).toBe(true);
    });

    it('should throw an error if creating a task fails', async () => {

        const mockCreateTaskDto: CreateTaskDto = { title: 'title', userId: 1, description: "description" };

        //configuramos o repositório mockado para retornar false
        mockedTaskRepository.create.mockResolvedValue(false);

        //verificamos se o serviço lança um erro ao tentar criar uma tarefa e a operação falha
        await expect(TaskService.create(mockCreateTaskDto)).rejects.toThrow('Cannot create task');
    });

    it('should find tasks by userId successfully', async () => {

        const mockUserId = 1;
        
        const mockTasks:Task[] = [{
            id: 1,
            title: '',
            isFavorite: false,
            description: "",
            user: {
                id: mockUserId,
                name: '',
                email: '',
                password: ''
            },
            createdAt: new Date(), 
            status: 'open'

        }];

        //configuramos o repositório mockado para retornar as tarefas simuladas
        mockedTaskRepository.findByUserId.mockResolvedValue(mockTasks);

        //executamos a função de busca por tarefas do usuário
        const result = await TaskService.findByUserId(mockUserId);

        //verificamos se o método de busca foi chamado com o ID do usuário correto
        expect(taskRepository.findByUserId).toHaveBeenCalledWith(mockUserId);

        //verificamos se o resultado retornado é igual às tarefas simuladas
        expect(result).toBe(mockTasks);
    });

    it('should find only favorite tasks successfully', async () => {
        
        const mockUserId = 1;

        // Simulamos o resultado esperado ao buscar apenas tarefas favoritas
        const mockFavoriteTasks: Task[] = [{
            id: 2,
            title: '',
            isFavorite: true,
            description: '',
            user: {
                id: mockUserId,
                name: '',
                email: '',
                password: ''
            },
            createdAt: new Date(),
            status: ''
        }];

        //configuramos o repositório mockado para retornar as tarefas favoritas simuladas
        mockedTaskRepository.findOnlyFavorites.mockResolvedValue(mockFavoriteTasks);

        //executamos a função de busca por tarefas favoritas do usuário
        const result = await TaskService.findOnlyFavorites(mockUserId);

        //verificamos se o método de busca foi chamado com o ID do usuário correto
        expect(taskRepository.findOnlyFavorites).toHaveBeenCalledWith(mockUserId);

        //verificamos se o resultado retornado é igual às tarefas favoritas simuladas
        expect(result).toBe(mockFavoriteTasks);
    });

    it('should find tasks by title successfully', async () => {
        
        const mockUserId = 1;
        const mockSearchTitle = 'Fazer';
        
        // Simulamos o resultado esperado ao buscar tarefas pelo título
        const mockTasksByTitle: Task[] = [{
            id: 2,
            title: '',
            isFavorite: true,
            description: '',
            user: {
                id: mockUserId,
                name: '',
                email: '',
                password: ''
            },
            createdAt: new Date(),
            status: ''
        }];

        //configuramos o repositório mockado para retornar as tarefas simuladas
        mockedTaskRepository.findByTitle.mockResolvedValue(mockTasksByTitle);

        //executamos a função de busca por tarefas pelo título
        const result = await TaskService.findByTitle(mockUserId, mockSearchTitle);

        //verificamos se o método de busca foi chamado com o ID do usuário e o título corretos
        expect(taskRepository.findByTitle).toHaveBeenCalledWith(mockUserId, mockSearchTitle);

        //verificamos se o resultado retornado é igual às tarefas simuladas
        expect(result).toBe(mockTasksByTitle);
    });

    it('should update a task successfully', async () => {
        
        const mockUpdateTaskDto: UpdateTaskDto = { title: 'Updated Task', isFavorite: true };
        const mockTaskId = 1;

        //configuramos o repositório mockado para retornar true na atualização da tarefa
        mockedTaskRepository.update.mockResolvedValue(true);

        //executamos a função de atualização do serviço
        const result = await TaskService.update(mockTaskId, mockUpdateTaskDto);

        //verificamos se o método de atualização foi chamado com o ID da tarefa e os dados corretos
        expect(taskRepository.update).toHaveBeenCalledWith(mockTaskId, mockUpdateTaskDto);

        //verificamos se o resultado retornado é igual a true
        expect(result).toBe(true);
    });

    it('should throw an error if updating a task fails', async () => {
        
        const mockUpdateTaskDto: UpdateTaskDto = { title: 'Updated Task', isFavorite: true };
        const mockTaskId = 1;

        //configuramos o repositório mockado para retornar false, simulando uma falha na atualização
        mockedTaskRepository.update.mockResolvedValue(false);

        //verificamos se o serviço lança um erro ao tentar atualizar uma tarefa e a operação falha
        await expect(TaskService.update(mockTaskId, mockUpdateTaskDto)).rejects.toThrow('Cannot update task');
    });

    it('should delete a task successfully', async () => {
        
        const mockTaskId = 1;

        //configuramos o repositório mockado para retornar true na exclusão da tarefa
        mockedTaskRepository.delete.mockResolvedValue(true);

        //executamos a função de exclusão do serviço
        const result = await TaskService.delete(mockTaskId);

        //verificamos se o método de exclusão foi chamado com o ID da tarefa correto
        expect(taskRepository.delete).toHaveBeenCalledWith(mockTaskId);

        //verificamos se o resultado retornado é igual a true
        expect(result).toBe(true);
    });

    it('should throw an error if deleting a task fails', async () => {
        
        const mockTaskId = 1;

        //configuramos o repositório mockado para retornar false, simulando uma falha na exclusão
        mockedTaskRepository.delete.mockResolvedValue(false);

        //verificamos se o serviço lança um erro ao tentar deletar uma tarefa e a operação falha
        await expect(TaskService.delete(mockTaskId)).rejects.toThrow('Cannot delete task');
    });
});