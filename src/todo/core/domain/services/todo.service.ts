import { Injectable } from '@nestjs/common'; // Importa el decorador Injectable de NestJS
import { Todo } from '../interface/todo.interface'; // Importa la interfaz Todo

@Injectable() // Marca la clase como un proveedor que puede ser inyectado en otros componentes
export class TodoService {
  private todos: Todo[] = []; // Array para almacenar las tareas
  private idCounter = 1; // Contador para asignar IDs únicos a cada tarea

  // Método para crear una nueva tarea
  create(text: string): Todo {
    const newTodo: Todo = { id: this.idCounter++, text, done: false }; // Crea una nueva tarea con un ID único y la marca como no completada
    this.todos.push(newTodo); // Añade la nueva tarea al array de tareas
    return newTodo; // Devuelve la nueva tarea
  }

  // Método para obtener todas las tareas
  findAll(): Todo[] {
    return this.todos; // Devuelve todas las tareas almacenadas
  }

  // Método para actualizar una tarea existente
  update(id: number, updates: Partial<Todo>): Todo | null {
    const todo = this.todos.find((t) => t.id === id); // Busca la tarea por su ID
    if (!todo) return null; // Si no se encuentra la tarea, devuelve null

    Object.assign(todo, updates); // Actualiza las propiedades de la tarea con los valores proporcionados
    return todo; // Devuelve la tarea actualizada
  }

  // Método para eliminar una tarea
  remove(id: number): boolean {
    const index = this.todos.findIndex((t) => t.id === id); // Busca el índice de la tarea por su ID
    if (index === -1) return false; // Si no se encuentra la tarea, devuelve false

    this.todos.splice(index, 1); // Elimina la tarea del array
    return true; // Devuelve true si la tarea fue eliminada
  }
}
