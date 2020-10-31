import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ type: String, description: 'title' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ type: String, description: 'description' })
  @IsNotEmpty()
  description: string;
}
