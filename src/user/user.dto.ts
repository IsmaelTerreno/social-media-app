import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'This will identify the unique user name in our database.',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Current password for the user.',
  })
  @IsString()
  password: string;
}
