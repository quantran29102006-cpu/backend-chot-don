import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './users.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('users')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
     return await  this.appService.createUser(createUserDto.username, createUserDto.passwords);
   
  }
}