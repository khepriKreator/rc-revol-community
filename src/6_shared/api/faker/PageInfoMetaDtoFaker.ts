import {faker} from '@faker-js/faker';
import {PageInfoMetaDto} from "../generated/game";

export const PageInfoMetaDtoFaker = (): PageInfoMetaDto => ({
    itemCount: faker.number.int(),
    totalPages: faker.number.int(),
    itemsPerPage: faker.number.int(),
    totalItems: faker.number.int(),
    currentPage: faker.number.int(),
})