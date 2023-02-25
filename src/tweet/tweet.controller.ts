import { Controller, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('App module')
@Controller('tweet')
export class TweetController {
  constructor(private readonly appService: TweetService) {}

  @Post()
  @ApiOperation({ summary: 'Create a tweet' })
  create(): string {
    return this.appService.getHello();
  }
}
