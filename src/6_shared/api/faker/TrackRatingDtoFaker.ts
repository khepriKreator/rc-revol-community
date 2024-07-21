import {faker} from "@faker-js/faker";
import {TrackRatingDto} from "../generated/game";

export const TrackRatingDtoFaker = (): TrackRatingDto => ({
    id: faker.number.int(),
    accountId: faker.number.int(),
    accountUsername: faker.internet.userName(),
    accountAvatar: faker.image.url(),
    trackPublicId: faker.string.uuid(),
    position: faker.lorem.word(),
    points: faker.number.int(),
    trick_points: faker.helpers.arrayElement([faker.number.int(), null]),
    number: faker.number.int(),
    bestLapTime: faker.number.int(),
    time: faker.number.int({min: 10000}),
    createdAt: faker.date.anytime().toString(),
    updatedAt: faker.date.anytime().toString(),
    isDemo: faker.datatype.boolean(),
})