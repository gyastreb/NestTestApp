import {Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import {TodoService} from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {
    }

    @Get()
    getAllTodo() {
        return this.todoService.getAllTodo();
    }

    @Get(':id')
    getOneTodo(@Param('id') id: number) {
        return this.todoService.getOneTodo(id);
    }

    @Post()
    create(@Body() body) {
        return this.todoService.create(body);
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return this.todoService.remove(id);
    }
}
