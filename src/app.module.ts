import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { AuthService } from './auth/auth.service.js';
import { ServiceModule } from './controller/service/service.module.js';
import { OrdersService } from './orders/orders.service.js';
import { OrdersModule } from './orders/orders.module.js';
import { ProductsService } from './products/products.service.js';
import { ProductsModule } from './products/products.module.js';

@Module({
  imports: [ProductsModule, ServiceModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService, OrdersService, ProductsService, AuthService],
})
export class AppModule {}
