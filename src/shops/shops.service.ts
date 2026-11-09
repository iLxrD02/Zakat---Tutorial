import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopsService {
    getShops(): string {
        return 'Get all shops';
    }


    getShopById2(id: string): string {
        return `Get shop with ID: ${id}`;
    }
}
