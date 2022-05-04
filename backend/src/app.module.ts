import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
