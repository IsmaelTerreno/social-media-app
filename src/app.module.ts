import { Module } from '@nestjs/common';
import { TweetController } from './tweet/tweet.controller';
import { TweetService } from './tweet/tweet.service';
import { UserController } from './user/user.controller';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [TweetController, UserController],
  providers: [TweetService],
})
export class AppModule {}
