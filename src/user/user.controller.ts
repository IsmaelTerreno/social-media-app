import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@ApiTags('User module')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiBody({ type: UserDto })
  @ApiOperation({ summary: 'Register a new user.' })
  register(@Body() user: UserDto): Promise<UserEntity> {
    return this.userService.register(user);
  }

  @Post('login')
  @HttpCode(200)
  @ApiBody({ type: UserDto })
  @ApiOperation({ summary: 'Login a user' })
  login(@Body() user: UserDto): Promise<string> {
    return this.userService.login(user);
  }
}
