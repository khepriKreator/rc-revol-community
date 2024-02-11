import {
    createBrowserRouter,
} from "react-router-dom";
import {TrackStat, HomePage, Tracks} from "./index.ts";
import {Layout} from "../3_widgets/Layout";
import {PlayerStat} from "./PlayerStat";

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
                children: [
                    {
                        element: <TrackStat/>,
                        path: 'tracks/:trackId',
                    }
                ]
            },
            {
                element: <PlayerStat/>,
                path: 'account/:accountId'
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

