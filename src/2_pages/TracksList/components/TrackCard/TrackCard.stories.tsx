/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {TrackCard, TrackCardProps} from './TrackCard';

const meta: Meta<TrackCardProps> = {
    component: TrackCard,
    title: 'pages/Tracks/components/TrackCard',
};

export default meta;


export const Component = () => {
    return (
        <>
            <TrackCard
            />
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}