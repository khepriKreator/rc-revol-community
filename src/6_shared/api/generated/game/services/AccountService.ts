/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountDto } from '../models/AccountDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountService {

    /**
     * Получить аккаунт по id
     * @param id 
     * @returns AccountDto Аккаунт найден
     * @throws ApiError
     */
    public static accountControllerFindOne(
id: number,
): CancelablePromise<AccountDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/account/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Аккаунт не найден`,
            },
        });
    }

}
