import {faker} from "@faker-js/faker";
import {ReportOptionTypeDtoFaker} from "./ReportOptionTypeDtoFaker.ts";
import {ReportOptionDto} from "../generated/game";

export const ReportOptionDtoFaker = (): ReportOptionDto => ({
    id: faker.number.int(),
    text: faker.lorem.sentence(),
    type: ReportOptionTypeDtoFaker(),
})