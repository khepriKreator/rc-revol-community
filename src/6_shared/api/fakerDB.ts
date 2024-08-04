import {TrackRatingDto, AccountDto, TrackDto} from "./generated/game";
import {createTrackListDB} from "./heplers/createTrackListDB.ts";
import {TrackTagDtoFaker} from "./faker/TrackTagDtoFaker.ts";
import {AccountDtoFaker} from "./faker/AccountDtoFaker.ts";
import {createTrackRatingDB} from "./heplers";

export const accountsDB: AccountDto[] = Array.from({length: 100}, AccountDtoFaker);
export const tagList = Array.from({length: 10}, TrackTagDtoFaker)
export const trackRatingDB: TrackRatingDto[] = createTrackRatingDB(accountsDB);

export const trackListDB: TrackDto[] = createTrackListDB(accountsDB, tagList);