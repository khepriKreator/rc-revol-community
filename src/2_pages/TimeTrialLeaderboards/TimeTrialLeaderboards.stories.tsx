/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {TimeTrialLeaderboards, TimeTrialLeaderboardsProps} from './TimeTrialLeaderboards';

const meta: Meta<TimeTrialLeaderboardsProps> = {
    component: TimeTrialLeaderboards,
    title: 'pages/TimeTrialLeaderboards',
};

export default meta;


export const Component = () => {
    return (
        <>
            <TimeTrialLeaderboards
                trackCardList={null}
            />
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}