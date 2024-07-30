import {TrackCategoryServiceHandlers} from './TrackCategoryServiceHandlers';
import {TrackRatingsServiceHandlers} from './TrackRatingsServiceHandlers';
import {TrackTagsServiceHandlers} from './TrackTagsServiceHandlers';
import {AccountServiceHandlers} from "./AccountServiceHandlers";
import {TrackServiceHandlers} from './TrackServiceHandlers';

export const handlers = [
    AccountServiceHandlers.accountControllerFindOneHandler(),

    TrackTagsServiceHandlers.trackTagControllerFindAllHandler(),

    TrackServiceHandlers.trackControllerFindHandler(),
    TrackServiceHandlers.trackControllerPaginateHandler(),

    TrackRatingsServiceHandlers.statsControllerGetResultsHandler(),
    TrackRatingsServiceHandlers.statsControllerGetAccountLeaderBoardHandler(),
    TrackRatingsServiceHandlers.statsControllerGetAllUserResultHandler(),
    TrackRatingsServiceHandlers.statsControllerGetGlobalLeaderBoardHandler(),
    TrackRatingsServiceHandlers.statsControllerGetTrackLeaderBoardHandler(),
    TrackRatingsServiceHandlers.statsControllerGetTrackPointsResultHandler(),
    TrackCategoryServiceHandlers.trackCategoryControllerGetAllCategoriesHandler(),
]