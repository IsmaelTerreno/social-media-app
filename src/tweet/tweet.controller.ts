import { Controller, Post, UseGuards } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Tweet module')
@Controller('tweet')
export class TweetController {
  constructor(private readonly appService: TweetService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a tweet' })
  create(): string {
    return this.appService.getHello();
  }
}
