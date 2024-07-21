import {faker} from '@faker-js/faker'
import {ReportOptionType, CreateReportDto} from "../generated/game";

const reportableType = (): ReportOptionType =>
    faker.helpers.arrayElement([
        ReportOptionType.TRACK,
        ReportOptionType.ACCOUNT,
    ])

export const CreateReportDtoFaker = (): CreateReportDto => ({
    reportableId: faker.string.uuid(),
    reportableType: reportableType(),
    text: faker.lorem.sentence(),
    optionId: faker.number.int(),
})