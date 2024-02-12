import {
    createBrowserRouter,
} from "react-router-dom";
import {PlayerStat, TrackStat, HomePage, Tracks} from "./index.ts";
import {Layout} from "../3_widgets/";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                element: <HomePage />,
                index: true
            },
            {
                path: 'tracks',
                element: <Tracks/>,
            },
            {
                element: <PlayerStat/>,
                path: 'account/:accountId'
            },
            {
                element: <TrackStat/>,
                path: 'tracks/:trackId',
            },
        ]
    }
])
/**
 * 1. /home -
 * 2. /faq
 * 3. /tracks
 * 4. /tracks/:trackId
 * 5. /account/:accountId
 * */

