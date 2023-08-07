import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  // username/pass la 2 tham so thu vien passport nem ve.
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);

    if (user) {
      const isValid = this.usersService.isCheckUserPassword(
        pass,
        user.password,
      );
      if (isValid) {
        return user;
      }
    }

    return null;
  }
}
