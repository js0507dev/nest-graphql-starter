
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCatInput {
    name: string;
    age: number;
}

export class UpdateCatInput {
    id: number;
    name: string;
    age: number;
}

export class Cat {
    id: number;
    name: string;
    age: number;
}

export abstract class IQuery {
    abstract cats(): Cat[] | Promise<Cat[]>;

    abstract cat(id: number): Cat | Promise<Cat>;
}

export abstract class IMutation {
    abstract createCat(createCatInput: CreateCatInput): Cat | Promise<Cat>;

    abstract updateCat(updateCatInput: UpdateCatInput): Cat | Promise<Cat>;

    abstract removeCat(id: number): Cat | Promise<Cat>;
}

type Nullable<T> = T | null;
