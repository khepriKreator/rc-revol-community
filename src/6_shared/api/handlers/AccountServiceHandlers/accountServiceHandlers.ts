import {HttpResponse, http} from "msw";
import {AccountDtoFaker} from "../../faker/AccountDtoFaker.ts";
import {AccountDto} from "../../generated/game";
import {domenURL} from "../../domen.ts";
const dataFaker = AccountDtoFaker()
export const AccountServiceHandlers = {
    accountControllerFindOneHandler: () => {
       return http.get(`${domenURL}/account/:id`, () => {
            const data: AccountDto = dataFaker;
            return HttpResponse.json(data);
        })
    }
}