import {faker} from "@faker-js/faker";
import {TrackCategoryDto} from "../generated/game";

export const TrackCategoryDtoFaker = (): TrackCategoryDto => ({
    id: faker.number.int(),
    name: faker.lorem.word()
})