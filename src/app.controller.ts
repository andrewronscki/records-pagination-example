import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './schemas/user.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.appService.findAll();
  }
}
