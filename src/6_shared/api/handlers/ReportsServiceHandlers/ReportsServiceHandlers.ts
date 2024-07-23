import {http} from 'msw';
import {domenURL} from "../../domen.ts";

export const ReportsServiceHandlers = {
    reportControllerCreateReportHandler: () => {
        return http.post(`${domenURL}/report`, async ({request}) => {
            const info = await request.formData()
            console.log(info);
        })
    }
}