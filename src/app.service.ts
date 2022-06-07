import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    return 'Hello Test!';
  }

  getFest(): string {
    return 'Hello Fest!';
  }
}
