import {faker} from "@faker-js/faker";
import {UpdateTrackDto} from "../generated/game";
const data = () => ({
    [faker.lorem.word()]: faker.lorem.sentence(),
    [faker.lorem.word()]: faker.lorem.sentence(),
    [faker.lorem.word()]: faker.lorem.sentence(),
    [faker.lorem.word()]: faker.lorem.sentence(),
})
export const UpdateTrackDtoFaker = (): UpdateTrackDto => ({
    data,
    title: faker.lorem.word(),
    published: faker.datatype.boolean(),
    previewId: faker.helpers.arrayElement([faker.number.int(), null]),
    tagsIds: faker.helpers.uniqueArray(() => faker.number.int(), faker.number.int()),
    categoryId: faker.number.int(),
})