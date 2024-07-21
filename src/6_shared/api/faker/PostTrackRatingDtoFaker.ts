import {faker} from "@faker-js/faker";
import {PostTrackRatingDto} from "../generated/game";

export const PostTrackRatingDtoFaker = ():PostTrackRatingDto => ({
    isDemo: faker.datatype.boolean(),
    time: faker.number.int({min: 10000}),
    bestLapTime: faker.number.int({min: 10000}),
})