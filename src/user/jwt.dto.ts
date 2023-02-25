import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class JwtDto {
  @ApiProperty({
    description:
      'JSON Web Token for future request to protected api resources.',
  })
  @IsString()
  access_token: string;
}
