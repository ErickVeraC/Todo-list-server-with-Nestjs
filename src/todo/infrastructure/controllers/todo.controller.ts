import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TodoService } from '../../core/domain/services/todo.service';
import { Todo } from '../../core/domain/interface/todo.interface';
import { CreateTodoDto } from '../../dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.todoService.create(createTodoDto.text);
  }

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updates: Partial<Todo>): Todo | null {
    return this.todoService.update(Number(id), updates);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.todoService.remove(Number(id));
  }
}
