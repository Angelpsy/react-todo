import {ID, CreatedAt, UpdatedAt} from '@/types/common';
import {Field} from '@/types/field';

export interface ItemNew {
  title: string;
  complete: boolean;
  field: Field[];
}

export type Item = ItemNew & {
  id: ID;
  createdAt: CreatedAt;
  updatedAt: UpdatedAt;
}
