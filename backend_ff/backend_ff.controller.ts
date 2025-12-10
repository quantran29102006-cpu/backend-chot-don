import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BackendFfService } from './backend_ff.service';
import { CreateBackendFfDto } from './dto/create-backend_ff.dto';
import { UpdateBackendFfDto } from './dto/update-backend_ff.dto';

@Controller('backend-ff')
export class BackendFfController {
  constructor(private readonly backendFfService: BackendFfService) {}

  @Post()
  create(@Body() createBackendFfDto: CreateBackendFfDto) {
    return this.backendFfService.create(createBackendFfDto);
  }

  @Get()
  findAll() {
    return this.backendFfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backendFfService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBackendFfDto: UpdateBackendFfDto) {
    return this.backendFfService.update(+id, updateBackendFfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backendFfService.remove(+id);
  }
}
