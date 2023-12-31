/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';

import {Tracks} from "./Tracks.tsx";

const meta: Meta = {
    component: Tracks,
    title: 'pages/Tracks',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Tracks
            />
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}