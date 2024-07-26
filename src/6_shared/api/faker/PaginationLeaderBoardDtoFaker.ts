import {faker} from "@faker-js/faker";
import {PageInfoMetaDtoFaker} from "./PageInfoMetaDtoFaker.ts";
import {TrackRatingDtoFaker} from "./TrackRatingDtoFaker.ts";
import {PaginationLeaderBoardDto} from "../generated/game";
const meta = PageInfoMetaDtoFaker();
export const PaginationLeaderBoardDtoFaker = (): PaginationLeaderBoardDto => ({
    meta: meta,
    items: faker.helpers.uniqueArray(() => TrackRatingDtoFaker(), meta.totalItems)
})