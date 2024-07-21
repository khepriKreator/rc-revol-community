import {faker} from "@faker-js/faker";
import {SteamPlatformDto} from "../generated/game";

export const SteamPlatformDtoFaker = (): SteamPlatformDto => ({
    id: faker.number.int(),
    ownersteamid: faker.string.uuid(),
    ownsapp: faker.datatype.boolean(),
    permanent: faker.datatype.boolean(),
    steamId: faker.string.uuid()
})