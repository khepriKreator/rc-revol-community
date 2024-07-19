import {HttpResponse, http} from 'msw';

export const TrackServiceHandlers = {
    trackControllerPaginateHandler: () => {
        return http.get('', () => {
            return HttpResponse.json({

            })
        })
    },
    trackControllerCreateHandler: () => {
        return http.post('', async ({request}) => {
            const info = await request.formData()
            console.log(info);
        })
    },
    trackControllerFindHandler: () => {
        return http.get('', () => {
            return HttpResponse.json({

            })
        })
    },
    trackControllerUpdateHandler: () => {
        http.patch('', async ({ request, params }) => {
            const orderUpdates = await request.json()
            console.log(
                params,
                orderUpdates
            )
        })
    },
}