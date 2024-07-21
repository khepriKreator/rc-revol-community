import {faker} from "@faker-js/faker";
import {TrackType} from "../generated/game";

export const TrackTypeDtoFaker = (): TrackType => faker.helpers.arrayElement([
    TrackType.CUSTOM,
    TrackType.DEFAULT,
])
