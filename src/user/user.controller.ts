import { Controller, HttpCode, Post } from '@nestjs/common';
import { TweetService } from '../tweet/tweet.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';

@ApiTags('User module')
@Controller('user')
export class UserController {
  constructor(private readonly appService: TweetService) {}

  @Post('register')
  @ApiBody({ type: UserDto })
  @ApiOperation({ summary: 'Register a new user.' })
  register(): string {
    return this.appService.getHello();
  }

  @Post('login')
  @HttpCode(200)
  @ApiBody({ type: UserDto })
  @ApiOperation({ summary: 'Login a user' })
  login(): string {
    return this.appService.getHello();
  }
}
