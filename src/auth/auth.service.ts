import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email, password) {
    const user = await this.usersService.findOneUserByEmail(email);
    return user && user.password === password;
  }

  async login(user): Promise<any> {
    const payload = { email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
