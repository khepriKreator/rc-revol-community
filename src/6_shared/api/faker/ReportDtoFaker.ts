import {faker} from "@faker-js/faker";
import {ReportOptionDtoFaker} from "./ReportOptionDtoFaker.ts";
import {ReportDto} from "../generated/game";

export const ReportDtoFaker = (): ReportDto => ({
    id: faker.number.int(),
    authorId: faker.number.int(),
    reportableId: faker.string.uuid(),
    reportableType: faker.lorem.word(),
    text: faker.lorem.sentence(),
    resolved: faker.datatype.boolean(),
    option: faker.helpers.arrayElement([null, ReportOptionDtoFaker()])
})