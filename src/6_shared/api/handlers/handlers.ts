import {ReportsOptionsServiceHandlers} from './ReportsOptionsServiceHandlers';
import {TrackCategoryServiceHandlers} from './TrackCategoryServiceHandlers';
import {TrackRatingsServiceHandlers} from './TrackRatingsServiceHandlers';
import {TrackTagsServiceHandlers} from './TrackTagsServiceHandlers';
import {AccountServiceHandlers} from './AccountServiceHandlers';
import {ReportsServiceHandlers} from './ReportsServiceHandlers';
import {ImagesServiceHandlers} from './ImagesServiceHandlers';
import {TrackServiceHandlers} from './TrackServiceHandlers';
import {VotesServiceHandlers} from './VotesServiceHandlers';

export const handlers = [
    AccountServiceHandlers.accountControllerFindOneHandler(),
    ImagesServiceHandlers.imageControllerUploadImageHandler(),
    ReportsOptionsServiceHandlers.reportOptionControllerGetAllHandler(),
    ReportsServiceHandlers.reportControllerCreateReportHandler(),
    TrackTagsServiceHandlers.trackTagControllerFindAllHandler(),
    
    TrackServiceHandlers.trackControllerCreateHandler(),
    TrackServiceHandlers.trackControllerFindHandler(),
    TrackServiceHandlers.trackControllerPaginateHandler(),
    TrackServiceHandlers.trackControllerUpdateHandler(),
    
    TrackRatingsServiceHandlers.statsControllerGetResultsHandler(),
    TrackRatingsServiceHandlers.statsControllerGetAccountLeaderBoardHandler(),
    TrackRatingsServiceHandlers.statsControllerGetAllUserResultHandler(),
    TrackRatingsServiceHandlers.statsControllerGetGlobalLeaderBoardHandler(),
    TrackRatingsServiceHandlers.statsControllerPostResultHandler(),
    TrackRatingsServiceHandlers.statsControllerGetTrackLeaderBoardHandler(),
    TrackRatingsServiceHandlers.statsControllerSaveTrackPointsResultHandler(),
    TrackRatingsServiceHandlers.statsControllerSaveTrackPointsResultHandler(),
    TrackRatingsServiceHandlers.statsControllerGetTrackPointsResultHandler(),
    
    VotesServiceHandlers.voteControllerGetCountByTrackHandler(),
    VotesServiceHandlers.voteControllerPostVoteHandler(),
    TrackCategoryServiceHandlers.trackCategoryControllerGetAllCategoriesHandler(),
]