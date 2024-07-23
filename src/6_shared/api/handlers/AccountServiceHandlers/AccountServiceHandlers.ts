import { HttpResponse, http } from 'msw';
import {AccountDtoFaker} from "../../faker/AccountDtoFaker.ts";
import {domenURL} from "../../domen.ts";

export const AccountServiceHandlers = {
    accountControllerFindOneHandler: () => {
        return http.get(`${domenURL}/account/id`, () => {
            return HttpResponse.json(AccountDtoFaker())
        })
    }
}