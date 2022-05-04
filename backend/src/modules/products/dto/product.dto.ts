import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty({ required: true })
    readonly code: string;
    @ApiProperty({ required: true })
    readonly name: string;
    @ApiProperty({ required: true })
    readonly stock: number;
    @ApiProperty({ required: true })
    readonly precio: number;
    @ApiProperty({ required: true })
    readonly moneda: string;
}