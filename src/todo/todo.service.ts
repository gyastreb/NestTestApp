import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {TodoInterface} from './interfaces/todo.interface';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {TodoEntity} from './entities/todo.entity';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(TodoEntity)
                private readonly photoRepository: Repository<TodoEntity>) {
    }

    getAllTodo(): Promise<TodoEntity[]> {
        return this.photoRepository.find();
    }

    getOneTodo(id: number): Promise<TodoEntity> {
        return this.photoRepository.findOne(id);
    }

    create(todo: TodoInterface) {
        return this.photoRepository.save(todo);
    }

    remove(id: number) {
        return this.photoRepository.delete(id);
    }
}
