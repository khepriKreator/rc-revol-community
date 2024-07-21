import {faker} from "@faker-js/faker";
import {PageInfoMetaDtoFaker} from "./PageInfoMetaDtoFaker.ts";
import {TrackRatingDtoFaker} from "./TrackRatingDtoFaker.ts";
import {PaginationLeaderBoardDto} from "../generated/game";

export const PaginationLeaderBoardDtoFaker = (): PaginationLeaderBoardDto => ({
    meta: PageInfoMetaDtoFaker(),
    items: faker.helpers.uniqueArray(() => TrackRatingDtoFaker(), faker.number.int())
})