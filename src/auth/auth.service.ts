import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    //private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = null; //await this.userService.findByEmail(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginDto) {
    const payload = { name: user.name, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  encryptPassword(password: string): string {
    const saltOrRounds = 10;

    return bcrypt.hashSync(password, saltOrRounds);
  }

  isPasswordValid(passwordA, passwordB: string): boolean {
    return bcrypt.compareSync(passwordA, passwordB);
  }
}
