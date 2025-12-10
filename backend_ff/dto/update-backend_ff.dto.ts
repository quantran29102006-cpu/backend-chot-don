import { PartialType } from '@nestjs/mapped-types';
import { CreateBackendFfDto } from './create-backend_ff.dto';

export class UpdateBackendFfDto extends PartialType(CreateBackendFfDto) {}
