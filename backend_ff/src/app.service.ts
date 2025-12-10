import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}
  async createUser(username, passwords): Promise<any | { loginStatus: { status: boolean; title: string; message: string } }> {
    if (username.length === 0 || passwords.length === 0) {
      return {
        loginStatus: {
            status: false, // false nghĩa là hiện Popup lỗi
            title: "Lỗi đăng nhập",
            message: "Mật khẩu cũ không chính xác. Vui lòng thử lại."
        }
      };
    }
    const newUser = this.usersRepository.create({ username, passwords });
    const savedUser = await this.usersRepository.save(newUser);
    return {
        loginStatus: {
            status: false, // false nghĩa là hiện Popup lỗi
            title: "Lỗi đăng nhập",
            message: "Mật khẩu cũ không chính xác. Vui lòng thử lại."
        }
      };  
    };
  }


