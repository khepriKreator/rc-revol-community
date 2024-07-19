import {HttpResponse, http} from 'msw';

export const TrackRatingsServiceHandlers = {
    statsControllerGetResultsHandler: () => {
        return http.get('', () => {
            return HttpResponse.json({

            })
        })
    },
    statsControllerPostResultHandler: () => {
        return http.post('', async ({request}) => {
            const info = await request.formData()
            console.log(info);
        })
    },
    statsControllerGetTrackPointsResultHandler: () => {
        return http.get('', () => {
            return HttpResponse.json({

            })
        })
    },
    statsControllerSaveTrackPointsResultHandler: () => {
        return http.post('', async ({request}) => {
            const info = await request.formData()
            console.log(info);
        })
    },
    statsControllerGetAllUserResultHandler: () => {
        return http.get('', () => {
            return HttpResponse.json({

            })
        })
    },
    statsControllerGetAccountLeaderBoardHandler: () => {
        return http.get('', () => {
            return HttpResponse.json({

            })
        })
    },
    statsControllerGetTrackLeaderBoardHandler: () => {
        return http.get('', () => {
            return HttpResponse.json({

            })
        })
    },
    statsControllerGetGlobalLeaderBoardHandler: () => {
        return http.get('', () => {
            return HttpResponse.json({

            })
        })
    },
}