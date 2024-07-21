import {faker} from '@faker-js/faker'
import {CreateTrackDto} from "../generated/game";

const data = () => ({
    [faker.lorem.word()]: faker.lorem.sentence(),
    [faker.lorem.word()]: faker.lorem.sentence(),
    [faker.lorem.word()]: faker.lorem.sentence(),
    [faker.lorem.word()]: faker.lorem.sentence(),
})

export const CreateTrackDtoFaker = (): CreateTrackDto => ({
    data: data,
    title: faker.lorem.word(),
    published: faker.datatype.boolean(),
    previewId: faker.number.int(),
    tagsIds: faker.helpers.uniqueArray<number>(() => faker.number.int(), 10),
    categoryId: faker.number.int(),
})