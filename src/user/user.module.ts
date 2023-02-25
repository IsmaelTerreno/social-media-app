import { Module } from '@nestjs/common';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [UserController],
  providers: [...userProviders, UserService, AuthService, JwtService],
  exports: [UserService],
})
export class UserModule {}
