import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [TweetController],
  providers: [TweetService],
})
export class TweetModule {}
