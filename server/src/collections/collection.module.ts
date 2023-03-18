import { Module } from '@nestjs/common';
import { CollectionController } from './collection.controller';
import { DatabaseService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CollectionController],
  providers: [DatabaseService]
})
export class CollectionModule {}
