import {http} from 'msw';

export const ReportsServiceHandlers = {
    reportControllerCreateReportHandler: () => {
        return http.post('/report', async ({request}) => {
            const info = await request.formData()
            console.log(info);
        })
    }
}