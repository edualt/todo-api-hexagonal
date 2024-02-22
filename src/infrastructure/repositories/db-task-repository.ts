import { TaskInterface } from '../../domain/entities/interfaces/task.interface';
import {TaskEntity} from '../../domain/entities/task.entity';
import {TaskRepository} from './task.repository';

export class DBTaskRepository implements TaskRepository {
  createTask(task: TaskEntity): Promise<TaskEntity> {
    const taskEntity = new TaskEntity(task.id, task.title, task.description, false);

    return Promise.resolve(taskEntity);
  }
  getTask(id: string): Promise<TaskEntity> {
    const task = new TaskEntity(id, 'title', 'description', false);
    return Promise.resolve(task);
  }
  updateTask(task: TaskEntity): Promise<TaskEntity> {
    const taskEntity = new TaskEntity(task.id, task.title, task.description, false);

    return Promise.resolve(taskEntity);
  }
  deleteTask(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }
  
}