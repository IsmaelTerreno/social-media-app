import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [UserModule, TweetModule],
})
export class AppModule {}
