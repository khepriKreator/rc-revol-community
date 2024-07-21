import {faker} from "@faker-js/faker";
import {PostTrackRatingResultDto} from "../generated/game";

export const PostTrackRatingResultDtoFaker = (): PostTrackRatingResultDto => ({
    prevResult: faker.helpers.arrayElement([null, faker.lorem.sentence()]),
    nextResult: faker.helpers.arrayElement([null, faker.lorem.sentence()]),
})