import {
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { ITodo } from "@lvh/shared/domain";

export class CreateTodoDto implements Pick<ITodo, 'title' | 'description'> {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;
}
