import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/prisma/prisma.service';
import { CollectionController } from './collection.controller';

@Module({
  imports: [],
  controllers: [CollectionController],
  providers: [DatabaseService]
})
export class CollectionModule {}
