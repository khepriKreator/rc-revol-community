/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountDto } from './AccountDto';
import type { ItemImageDto } from './ItemImageDto';
import type { TrackCategoryDto } from './TrackCategoryDto';
import type { TrackTagDto } from './TrackTagDto';
import type { TrackType } from './TrackType';

export type TrackDto = {
  /**
   * Используется для расшаривания и как основной таблицы треков
   */
  publicId: string;
  title: string;
  /**
   * Аккаунт пользователя
   */
  author: AccountDto;
  preview?: ItemImageDto | null;
  /**
   * В формате JSON
   */
  data: Record<string, any>;
  isEditable: boolean;
  published: boolean;
  type: TrackType;
  voteCount: number;
  numberOfRaces: number;
  tags: Array<TrackTagDto>;
  category: TrackCategoryDto;
};
