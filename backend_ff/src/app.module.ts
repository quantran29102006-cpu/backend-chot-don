import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Nhớ import dòng này
import { Users } from './users.entity'; // Import Entity của bạn (đường dẫn có thể khác tùy file bạn)

@Module({
  imports: [
    // 1. Kích hoạt module đọc file .env
    ConfigModule.forRoot({
      isGlobal: true,      // Để dùng được ở mọi nơi
      envFilePath: '.env', // Chỉ định rõ tên file
    }),

    // 2. Cấu hình Database theo kiểu Async (Chờ đọc xong .env mới chạy)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [Users],
        
        // Tự động load các entity (đỡ phải khai báo thủ công từng cái)
        autoLoadEntities: true, 
        synchronize: true, // Chỉ bật true khi đang dev, lên production nhớ tắt
      }),
    }),
    
    // Các module khác của bạn (ví dụ: UsersModule)
    // UsersModule, 
  ],
})
export class AppModule {}