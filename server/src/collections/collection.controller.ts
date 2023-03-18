import { Body, Controller, Post } from '@nestjs/common';
import { DatabaseService } from 'src/prisma/prisma.service';
import { AddCollectionDTO } from './collection.DTO';

@Controller('collection')
export class CollectionController {
  constructor(private databaseService: DatabaseService) {}

  @Post()
  saveCollection(@Body() body: AddCollectionDTO) {}
}
