import {faker} from '@faker-js/faker'
import {AccountDto} from "../generated/game";

export const AccountDtoFaker = (): AccountDto => ({
        id: faker.number.int(),
        username: faker.internet.userName(),
        avatar: faker.image.url(),
    })