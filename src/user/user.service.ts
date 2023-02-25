import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { JwtDto } from './jwt.dto';
import { AuthService } from '../auth/auth.service';
import { USER_REPOSITORY } from './user.providers';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private repository: Repository<UserEntity>,
    private authService: AuthService,
  ) {}

  async findByEmail(email: string): Promise<UserEntity> {
    return this.repository.findOneBy({ email });
  }

  async register(userDto: UserDto): Promise<UserEntity> {
    userDto.password = this.authService.encryptPassword(userDto.password);
    try {
      return this.repository.save(
        this.fromDTOToEntity(userDto, new UserEntity()),
      );
    } catch (e) {
      throw new InternalServerErrorException(
        'Error when try to register a new user',
        {
          cause: new Error(),
          description: e.description,
        },
      );
    }
  }

  async login(user: UserDto): Promise<JwtDto> {
    // return this.repository.findOneBy({ email });
    return null;
  }

  private fromDTOToEntity(
    userDto: UserDto,
    userEntity: UserEntity,
  ): UserEntity {
    return {
      ...userEntity,
      email: userDto.email,
      password: userDto.password,
      name: userDto.name,
    };
  }
}
