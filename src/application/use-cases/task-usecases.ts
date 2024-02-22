import { TaskEntity } from "../../domain/entities/task.entity";
import { TaskRepository } from "../../infrastructure/repositories/task.repository";
import {v4 as uuidv4} from 'uuid';

export class TaskUseCases {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(request: TaskEntity) : Promise<TaskEntity> {
    const id = uuidv4();

    const task = new TaskEntity(id, request.title, request.description, false);

    const entity = await this.taskRepository.createTask(task);

    return entity;
  }

  async update(request: TaskEntity) : Promise<TaskEntity> {
    const id = uuidv4();

    const task = new TaskEntity(id, request.title, request.description, false);

    const entity = await this.taskRepository.createTask(task);

    return entity;
  }

  async delete(id: string) : Promise<boolean> {
    const isDeleted = await this.taskRepository.deleteTask(id);

    return isDeleted;
  }
}