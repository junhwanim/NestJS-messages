import {IsString} from 'class-validator'

// Validator it is making sure it is string
export class CreateMessageDto {
  @IsString()
  content: string;
}