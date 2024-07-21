import {faker} from '@faker-js/faker';
import {HttpExceptionDto} from "../generated/game";

export const HttpExceptionDtoFaker = (): HttpExceptionDto => ({
    message: faker.lorem.sentence(),
    statusCode: faker.lorem.word(),
})