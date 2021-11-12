import { Injectable } from '@nestjs/common';
import * as gql from '../graphql';

let dumyCats: gql.Cat[] = [
  { id: 1, name: 'green', age: 2 },
  { id: 2, name: 'red', age: 4 },
];

@Injectable()
export class CatsService {
  create(createCatInput: gql.CreateCatInput): gql.Cat {
    const createdCat = {
      id: dumyCats.length + 1,
      name: createCatInput.name,
      age: createCatInput.age,
    };
    dumyCats.push(createdCat);
    return createdCat;
  }

  findAll(): gql.Cat[] {
    return dumyCats;
  }

  findOne(id: number): gql.Cat {
    return dumyCats.find((cat) => cat.id === id);
  }

  update(id: number, updateCatInput: gql.UpdateCatInput): gql.Cat {
    dumyCats = dumyCats.map((cat) => {
      if (cat.id === id) {
        return {
          ...cat,
          name: updateCatInput.name,
          age: updateCatInput.age,
        };
      }
      return cat;
    });
    return dumyCats.find((cat) => cat.id === id);
  }

  remove(id: number): gql.Cat {
    const removeCat = dumyCats.find((cat) => cat.id === id);
    dumyCats = dumyCats.filter((cat) => cat.id !== id);
    return removeCat;
  }
}
