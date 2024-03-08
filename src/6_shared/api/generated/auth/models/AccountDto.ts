/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';
import type { SteamPlatformDto } from './SteamPlatformDto';

export type AccountDto = {
  /**
   * Email
   */
  email: string;
  /**
   * Кол-во свободных слотов
   */
  freeSlots: number;
  /**
   * ID
   */
  id: number;
  /**
   * Роль
   */
  roles: Role;
  /**
   * Подключенный steam аккаунт
   */
  steam: SteamPlatformDto | null;
  /**
   * Имя аккаунта
   */
  username: string;
  /**
   * Ссылка на аватарку
   */
  avatar: string;
  lastLogin: string;
};
