import {faker} from "@faker-js/faker";
import {TrackCategoryDtoFaker} from "./TrackCategoryDtoFaker.ts";
import {ItemImageDtoFaker} from "./ItemImageDtoFaker.ts";
import {TrackTypeDtoFaker} from "./TrackTypeDtoFaker.ts";
import {TrackTagDtoFaker} from "./TrackTagDtoFaker.ts";
import {AccountDtoFaker} from "./AccountDtoFaker.ts";
import {TrackDto} from "../generated/game";

const data = () => ({
    [faker.lorem.word()]: faker.lorem.sentence(),
    [faker.lorem.word()]: faker.lorem.sentence(),
    [faker.lorem.word()]: faker.lorem.sentence(),
    [faker.lorem.word()]: faker.lorem.sentence(),
})

export const TrackDtoFaker = (): TrackDto => ({
    publicId: faker.string.uuid(),
    title: faker.lorem.word(),
    author: AccountDtoFaker(),
    preview: ItemImageDtoFaker(),
    data: data,
    isEditable: faker.datatype.boolean(),
    published: faker.datatype.boolean(),
    type: TrackTypeDtoFaker(),
    voteCount: faker.number.int(),
    numberOfRaces: faker.number.int(),
    tags: faker.helpers.uniqueArray(() => TrackTagDtoFaker(), 5),
    category: TrackCategoryDtoFaker(),
})