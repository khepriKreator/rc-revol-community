import { HttpResponse, http } from 'msw';
import {AccountDtoFaker} from "../../faker/AccountDtoFaker.ts";

export const AccountServiceHandlers = {
    accountControllerFindOneHandler: (id: number) => {
        return http.get(`/account/${id}`, () => {
            return HttpResponse.json(AccountDtoFaker())
        })
    }
}