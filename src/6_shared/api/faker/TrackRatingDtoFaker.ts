import {faker} from "@faker-js/faker";
import {TrackRatingDto} from "../generated/game";

export const TrackRatingDtoFaker = (): TrackRatingDto => ({
    id: faker.number.int(),
    accountId: faker.number.int(),
    accountUsername: faker.internet.userName(),
    accountAvatar: faker.image.url(),
    trackPublicId: faker.string.uuid(),
    position: faker.lorem.word(),
    points: faker.number.int({max: 10000}),
    trick_points: faker.helpers.arrayElement([faker.number.int(), null]),
    number: faker.number.int({max: 10000}),
    bestLapTime: faker.number.int({max: 10000}),
    time: faker.number.int({min: 100, max: 1000}),
    createdAt: faker.date.anytime().toString(),
    updatedAt: faker.date.anytime().toString(),
    isDemo: faker.datatype.boolean(),
})