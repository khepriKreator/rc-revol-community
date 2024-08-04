import {faker} from '@faker-js/faker';
import {ItemImageDto} from "../generated/game";

export const ItemImageDtoFaker = ():ItemImageDto => ({
    id: faker.number.int(),
    s3Key: faker.lorem.word(),
    s3Location: faker.image.url(),
    createdAt: faker.date.anytime().toString(),
    updatedAt: faker.date.anytime().toString(),
})