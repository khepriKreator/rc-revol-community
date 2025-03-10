import { createBrowserRouter } from 'react-router-dom';
import {PlayerStat, TracksList, TrackStat, HomePage, FaqPage} from "./index.ts";
import {Layout} from "../3_widgets/";

export const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: 'tracks',
        element: <TracksList />,
      },
      {
        element: <PlayerStat />,
        path: 'account/:accountId',
      },
      {
        element: <TrackStat />,
        path: 'tracks/:trackId',
      },
      {
        element: <FaqPage />,
        path: '/faq',
      },
    ],
  },
]);
/**
 * 1. /home -
 * 2. /faq
 * 3. /tracks
 * 4. /tracks/:trackId
 * 5. /account/:accountId
 * */

