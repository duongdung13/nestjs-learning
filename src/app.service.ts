import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Chao mung cac ban den voi Khoa hoc Nestjs!';
  }
}
