import {HttpResponse, http} from 'msw';

export const ReportsOptionsServiceHandlers = {
    reportOptionControllerGetAllHandler: (type?: 'track' | 'account') => {
        return http.get('/report-option', () => {
            return HttpResponse.json({
                id: 1,
                text: '',
                type: type,
            })
        })
    }
}