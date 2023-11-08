import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateTodoDto {
    @IsNotEmpty()
	@IsString()
    text: string
}
