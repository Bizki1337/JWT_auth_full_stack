import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { TodoService } from './todo.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { GetCurrentUserId } from 'src/common/decorators'

@Controller('todo')
export class TodoController {
	constructor(private readonly todoService: TodoService) {}

	@Post('create')
	create(
		@Body() createTodoDto: CreateTodoDto,
		@GetCurrentUserId() userId: number
	) {
		return this.todoService.create(createTodoDto, userId)
	}

	@Get('all')
	findAll(@GetCurrentUserId() userId: number) {
		return this.todoService.findAll(userId)
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.todoService.findOne(+id)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
		return this.todoService.update(+id, updateTodoDto)
	}

	@Delete('delete/:id')
	remove(@Param('id') id: string) {
		return this.todoService.remove(+id)
	}
}
