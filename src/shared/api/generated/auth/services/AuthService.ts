/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountDto } from '../models/AccountDto';
import type { SignInWithSteamDto } from '../models/SignInWithSteamDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Авторизация через steam
     * NOTION: аккаунт пользователя может уже существовать в БД по этому статус код может различаться (201 или 200)
     * @param xSteamAppId Идентификатор приложения
     * @param requestBody 
     * @returns AccountDto 
     * @throws ApiError
     */
    public static authControllerSignInWithSteam(
xSteamAppId: string,
requestBody: SignInWithSteamDto,
): CancelablePromise<AccountDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/signInWithSteam',
            headers: {
                'x-steam-app-id': xSteamAppId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Получение данных аккаунта
     * Возвращает данные текущего авторизированного аккаунта
     * @returns AccountDto 
     * @throws ApiError
     */
    public static authControllerAccount(): CancelablePromise<AccountDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/account',
        });
    }

}
