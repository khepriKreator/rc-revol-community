import { http } from 'msw';
import {domenURL} from "../../domen.ts";

export const ImagesServiceHandlers = {
    imageControllerUploadImageHandler: () => {
        http.post(`${domenURL}/image/upload`, async ({ request }) => {
            const info = await request.formData()
            console.log(info);
        })
    },
}