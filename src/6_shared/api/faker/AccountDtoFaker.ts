import {faker} from '@faker-js/faker'
import {AccountDto} from "../generated/game";

export const AccountDtoFaker = (): AccountDto => ({
        id: faker.number.int({max: 10000}),
        username: faker.internet.userName(),
        avatar: faker.image.url(),
    })