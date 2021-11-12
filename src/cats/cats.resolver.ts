import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import * as gql from '../graphql';

@Resolver('Cat')
export class CatsResolver implements gql.IQuery, gql.IMutation {
  constructor(private readonly catsService: CatsService) {
  }

  @Mutation('createCat')
  createCat(@Args('createCatInput') createCatInput: gql.CreateCatInput): gql.Cat | Promise<gql.Cat> {
    return this.catsService.create(createCatInput);
  }

  @Query('cats')
  cats(): gql.Cat[] | Promise<gql.Cat[]> {
    return this.catsService.findAll();
  }

  @Query('cat')
  cat(@Args('id') id: number): gql.Cat | Promise<gql.Cat> {
    return this.catsService.findOne(id);
  }

  @Mutation('updateCat')
  updateCat(@Args('updateCatInput') updateCatInput: gql.UpdateCatInput): gql.Cat | Promise<gql.Cat> {
    return this.catsService.update(updateCatInput.id, updateCatInput);
  }

  @Mutation('removeCat')
  removeCat(@Args('id') id: number): gql.Cat | Promise<gql.Cat> {
    return this.catsService.remove(id);
  }
}
