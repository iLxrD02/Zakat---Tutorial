import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { ServiceModule } from './controller/service/service.module.js';

@Module({
  imports: [ProductsModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
