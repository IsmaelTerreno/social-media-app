import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USER_REPOSITORY } from './user.providers';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private repository: Repository<UserEntity>,
  ) {}

  async login(userDto: UserDto): Promise<string> {
    return userDto.email;
  }

  async register(userDto: UserDto): Promise<UserEntity> {
    return this.repository.save(
      this.fromDTOToEntity(userDto, new UserEntity()),
    );
  }

  private fromDTOToEntity(
    userDto: UserDto,
    userEntity: UserEntity,
  ): UserEntity {
    return {
      ...userEntity,
      email: userDto.email,
      password: userDto.password,
    };
  }
}
