import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'User name.',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'This will identify the unique user name in our database.',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Current password for the user.',
  })
  @IsString()
  password: string;
}
