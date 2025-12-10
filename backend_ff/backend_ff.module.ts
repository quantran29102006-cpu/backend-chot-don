import { Module } from '@nestjs/common';
import { BackendFfService } from './backend_ff.service';
import { BackendFfController } from './backend_ff.controller';

@Module({
  controllers: [BackendFfController],
  providers: [BackendFfService],
})
export class BackendFfModule {}
