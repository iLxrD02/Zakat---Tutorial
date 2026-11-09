import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { ServiceModule } from './controller/service/service.module.js';
import { OrdersService } from './orders/orders.service.js';
import { OrdersModule } from './orders/orders.module.js';

@Module({
  imports: [ProductsModule, ServiceModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService, OrdersService],
})
export class AppModule {}
