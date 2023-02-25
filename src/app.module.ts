import { Module } from '@nestjs/common';
import { TweetController } from './tweet/tweet.controller';
import { TweetService } from './tweet/tweet.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [TweetController, UserController],
  providers: [TweetService],
})
export class AppModule {}
