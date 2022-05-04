import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @ApiProperty()
    @Prop({ type: String, index: true, unique: true })
    code: string;

    @ApiProperty()
    @Prop({ type: String, maxlength: 255 })
    name: string;

    @ApiProperty()
    @Prop({
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value',
        },
    })
    stock: number;

    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.Decimal128, min: 0 })
    precio: number;

    @ApiProperty()
    @Prop({ type: String })
    moneda: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
