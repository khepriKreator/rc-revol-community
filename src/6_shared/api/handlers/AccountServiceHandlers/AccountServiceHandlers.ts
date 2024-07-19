import { HttpResponse, http } from 'msw';

export const AccountServiceHandlers = {
    accountControllerFindOneHandler: (id: number) => {
        return http.get(`/account/${id}`, () => {
            return HttpResponse.json({
                id: 1,
                username: '',
                avatar: '',
            })
        })
    }
}