/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {TrackCard, TrackCardProps} from './TrackCard';

const meta: Meta<TrackCardProps> = {
    component: TrackCard,
    title: 'TrackCard',
};

export default meta;


export const Component = () => {
    return (
        <>
            <TrackCard
                image={''}
                trackName={'track name'}
                tags={null}
            />
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}