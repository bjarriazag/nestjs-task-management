import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter-dto';
import { TaskRepository } from './task.repository';
import { Task } from 'dist/tasks/task.entity';


@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskRepository) private readonly taskRepository: TaskRepository,
    ) { }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);
        if (!found) {
            throw new NotFoundException(`Task with ID: ${id} Not found!`);
        }
        return found;
    }

    /*
        private tasks: Task[] = [];
        getAllTasks(): Task[] {
            return this.tasks;
        }

        getTasksWithFilters(filterDTO: GetTasksFilterDTO): Task[] {
            const { status, search } = filterDTO;
            let tasks = this.getAllTasks();
            if (status) {
                tasks = tasks.filter(task => task.status === status);
            }
            if (search) {
                tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search));
            }
            return tasks;
        }

        createTask(createTaskDTO: CreateTaskDTO): Task {
            const { title, description } = createTaskDTO;
            const task: Task = {
                id: uuid(),
                title,
                description,
                status: TaskStatus.OPEN,
            };
            this.tasks.push(task);
            return task;
        }

        updateTaskStatus(id: string, status: TaskStatus): Task {
            const task = this.getTaskById(id);
            task.status = status;
            return task;
        }

        deleteTask(id: string): Task[] {
            const found = this.getTaskById(id);
            this.tasks = this.tasks.filter(task => task.id !== found.id);
            return this.tasks;
        }
    */
}
