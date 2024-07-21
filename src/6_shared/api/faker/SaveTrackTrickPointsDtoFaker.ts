import {faker} from "@faker-js/faker";
import {SaveTrackTrickPointsDto} from "../generated/game";

export const SaveTrackTrickPointsDtoFaker = (): SaveTrackTrickPointsDto => ({
    isDemo: faker.datatype.boolean(),
    trick_points: faker.number.int(),
})