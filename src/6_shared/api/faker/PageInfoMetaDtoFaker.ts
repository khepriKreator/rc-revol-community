import {faker} from '@faker-js/faker';
import {PageInfoMetaDto} from "../generated/game";

const totalPages = faker.number.int({min: 1, max: 300})
const itemsPerPage = faker.number.int({min: 10, max: 20})
const totalItems = totalPages * itemsPerPage;

export const PageInfoMetaDtoFaker = (): PageInfoMetaDto => ({
    itemCount: faker.number.int({min: 1, max: 300}),
    totalPages: totalPages,
    itemsPerPage: itemsPerPage,
    totalItems: totalItems,
    currentPage: faker.number.int({min: 1, max: totalPages}),
})