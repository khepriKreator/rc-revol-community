import {faker} from "@faker-js/faker";
import {PageInfoMetaDtoFaker} from "./PageInfoMetaDtoFaker.ts";
import {PaginateTrackDto} from "../generated/game";
import {TrackDtoFaker} from "./TrackDtoFaker.ts";

export const PaginateTrackDtoFaker = (): PaginateTrackDto => ({
    meta: PageInfoMetaDtoFaker(),
    items: faker.helpers.uniqueArray(() => TrackDtoFaker(), faker.number.int({min: 5})),
})