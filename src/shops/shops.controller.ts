import { Controller } from '@nestjs/common';

@Controller('shops')
export class ShopsController {


    getShops(): string {
        return 'Get all shops';
    }

    getShopById(id: string): string {
        return `Get shop with ID: ${id}`;
    }
}
