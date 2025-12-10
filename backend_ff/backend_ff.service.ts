import { Injectable } from '@nestjs/common';
import { CreateBackendFfDto } from './dto/create-backend_ff.dto';
import { UpdateBackendFfDto } from './dto/update-backend_ff.dto';

@Injectable()
export class BackendFfService {
  create(createBackendFfDto: CreateBackendFfDto) {
    return 'This action adds a new backendFf';
  }

  findAll() {
    return `This action returns all backendFf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} backendFf`;
  }

  update(id: number, updateBackendFfDto: UpdateBackendFfDto) {
    return `This action updates a #${id} backendFf`;
  }

  remove(id: number) {
    return `This action removes a #${id} backendFf`;
  }
}
