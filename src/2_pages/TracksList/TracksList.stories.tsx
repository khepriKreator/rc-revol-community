/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';

import {TracksList} from "./TracksList.tsx";

const meta: Meta = {
    component: TracksList,
    title: 'pages/Tracks',
};

export default meta;


export const Component = () => {
    return (
        <>
            <TracksList
            />
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}