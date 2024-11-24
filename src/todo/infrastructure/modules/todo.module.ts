import { Module } from '@nestjs/common';
import { TodoController } from '../../infrastructure/controllers/todo.controller';
import { TodoService } from '../../core/domain/services/todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
