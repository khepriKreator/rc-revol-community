/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {PlayerStat, PlayerStatProps} from './PlayerStat.tsx';

const meta: Meta<PlayerStatProps> = {
    component: PlayerStat,
    title: 'features/PlayerStat',
};

export default meta;


export const Component = () => {
    return (
        <>
            <PlayerStat tracks={null} user={null}/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}