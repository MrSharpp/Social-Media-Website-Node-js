import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

const CollectionAddSchema = z.object({
  columns: z.array(z.object({ columnName: z.string(), columnType: z.string() }))
});

export class AddCollectionDTO extends createZodDto(CollectionAddSchema) {}
