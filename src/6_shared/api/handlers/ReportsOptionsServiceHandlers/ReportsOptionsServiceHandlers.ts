import {HttpResponse, http} from 'msw';
import {ReportOptionDtoFaker} from "../../faker/ReportOptionDtoFaker.ts";

export const ReportsOptionsServiceHandlers = {
    reportOptionControllerGetAllHandler: () => {
        return http.get('/report-option', () => {
            return HttpResponse.json(ReportOptionDtoFaker())
        })
    }
}