import {HttpResponse, http} from "msw";
import {AccountDto} from "../../generated/game";
import {accountsDB} from "../../fakerDB.ts";
import {getAccount} from "../../heplers";
import {domenURL} from "../../domen.ts";
export const AccountServiceHandlers = {
    accountControllerFindOneHandler: () => {
       return http.get(`${domenURL}/account/:id`, ({params}) => {
            const {id} = params;
            const account: AccountDto = getAccount(id as string, accountsDB);
            console.log(account)
            return HttpResponse.json(account);
        })
    }
}