import {faker} from "@faker-js/faker";
import {TrackTagDto} from "../generated/game";

export const TrackTagDtoFaker = (): TrackTagDto => ({
    id: faker.number.int(),
    name: faker.lorem.word(),
})