import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
    ) { }

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = await this.productModel.create(createProductDto);
        return createdProduct;
    }

    async findAll(offset = 0, limit?: number): Promise<Product[]> {
        const query = this.productModel.find().find()
            .skip(offset)
        if (limit) {
            query.limit(limit);
        } 
        return await query.exec()
    }

}