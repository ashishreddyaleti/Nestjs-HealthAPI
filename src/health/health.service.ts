import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '$HOSTNAME Healthy and 200 OK';
  }
}
