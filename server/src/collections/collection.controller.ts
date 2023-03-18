import { Body, Controller, Post } from '@nestjs/common';
import { AddCollectionDTO } from './collection.DTO';
import { DatabaseService } from '../../src/prisma/prisma.service';

@Controller('collection')
export class CollectionController {
  constructor(private databaseService: DatabaseService) {}

  @Post()
  saveCollection(@Body() body: AddCollectionDTO) {}
}
