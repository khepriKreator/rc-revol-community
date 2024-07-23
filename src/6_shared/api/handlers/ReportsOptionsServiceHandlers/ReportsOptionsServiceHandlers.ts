import {HttpResponse, http} from 'msw';
import {ReportOptionDtoFaker} from "../../faker/ReportOptionDtoFaker.ts";
import {domenURL} from "../../domen.ts";

export const ReportsOptionsServiceHandlers = {
    reportOptionControllerGetAllHandler: () => {
        return http.get(`${domenURL}/report-option`, () => {
            return HttpResponse.json(ReportOptionDtoFaker())
        })
    }
}