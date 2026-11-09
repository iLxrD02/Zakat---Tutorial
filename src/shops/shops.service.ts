import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopsService {
    getShops(): string {
        return 'Get all shops';
    }


    getShopById(id: string): string {
        return `Get shop with ID: ${id}`;
    }
}
