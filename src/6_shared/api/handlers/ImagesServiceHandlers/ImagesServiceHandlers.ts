import { http } from 'msw';

export const ImagesServiceHandlers = {
    imageControllerUploadImageHandler: () => {
        http.post('/image/upload', async ({ request }) => {
            const info = await request.formData()
            console.log(info);
        })
    },
}