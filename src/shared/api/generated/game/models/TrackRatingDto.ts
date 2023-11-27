/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TrackRatingDto = {
    /**
     * ID результатов заезда
     */
    id: number;
    /**
     * ID аккаунта
     */
    accountId: number;
    /**
     * Username аккаунта
     */
    accountUsername: string;
    /**
     * Ссылка на аватарку
     */
    accountAvatar: string | null;
    /**
     * Используется для расшаривания и как основной таблицы треков
     */
    trackPublicId: string;
    /**
     * Позиция в рейтинге
     */
    position: string;
    /**
     * Количество заездов
     */
    number: number;
    /**
     * Лучшее время круга
     */
    bestLapTime: number;
    /**
     * Лучшее время заезда
     */
    time: number;
    /**
     * Дата создания
     */
    createdAt: string;
    /**
     * Дата обновления
     */
    updatedAt: string;
    /**
     * Является ли эта статистика для трассы из демо-версии
     */
    isDemo: boolean;
};
