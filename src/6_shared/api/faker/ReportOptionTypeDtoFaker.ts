import {faker} from "@faker-js/faker";
import {ReportOptionType} from "../generated/game";

export const ReportOptionTypeDtoFaker = (): ReportOptionType => faker.helpers.arrayElement([ReportOptionType.ACCOUNT, ReportOptionType.TRACK])