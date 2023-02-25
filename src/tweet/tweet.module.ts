import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TweetController],
  providers: [TweetService],
})
export class TweetModule {}
