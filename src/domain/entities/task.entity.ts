import { TaskInterface } from "./interfaces/task.interface";

export class TaskEntity implements TaskInterface {
  _id: string;
  _title: string;
  _description: string;
  _completed: boolean;

  constructor(id: string, title: string, description: string, completed: boolean) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._completed = completed;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get completed(): boolean {
    return this._completed;
  }

  set id(id: string) {
    this._id = id;
  }

  set title(title: string) {
    this._title = title;
  }

  set description(description: string) {
    this._description = description;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }
}