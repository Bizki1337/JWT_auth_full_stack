import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Injectable()
export class TodoService {
	constructor(
		private prisma: PrismaService
	) {}

	async create(createTodoDto: CreateTodoDto, userId: number) {
		const { text } = createTodoDto
		const newTodo = await this.prisma.todo.create({
			data: {
				authorId: userId,
				text,
			}
		})

		return newTodo
	}

	async findAll(userId: number) {
		const todoList = await this.prisma.todo.findMany({
			where: {
				authorId: userId
			}
		})
		return todoList
	}

	async findOne(id: number) {
		const todo = await this.prisma.todo.findFirst({
			where: {
				id
			}
		})
		return todo
	}

	async update(id: number, updateTodoDto: UpdateTodoDto) {
		const { text } = updateTodoDto
		const updatedTodo = await this.prisma.todo.update({
			where: {
				id,
			},
			data: {
				text
			}
		})
		return updatedTodo
	}

	async remove(id: number) {
		const deletedTodo = await this.prisma.todo.delete({
			where: {
				id
			}
		})
		return {msg: 'todo was deleted'}
	}
}
