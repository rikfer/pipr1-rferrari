import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './schemas/product.schema';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guards';

@ApiBearerAuth()
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    @UseGuards(AuthGuard)
    @ApiBody({ type: CreateProductDto })
    @ApiOperation({ summary: 'Create product' })
    @ApiResponse({
        status: 200,
        description: 'create products for applications',
        type: [CreateProductDto],
    })
    async create(@Body() createProductDto: CreateProductDto) {
        const productCreated = await this.productsService.create(createProductDto);
        return productCreated
    }

    @Get()
    @ApiOperation({ summary: 'Get all products' })
    @ApiQuery({
        name: 'limit',
        required: false,
        type: Number
    })
    @ApiQuery({
        name: 'offset',
        required: false,
        type: Number
    })
    @ApiResponse({
        status: 200,
        description: 'get all products',
        type: CreateProductDto,
        isArray: true,
    })
    async findAll(
        @Query('offset') offset: number,
        @Query('limit') limit: number): Promise<Product[]> {
        return this.productsService.findAll(offset, limit);
    }

}