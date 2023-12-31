/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {GlobalLeaderBoard, GlobalLeaderBoardProps} from './GlobalLeaderBoard';

const meta: Meta<GlobalLeaderBoardProps> = {
    component: GlobalLeaderBoard,
    title: 'pages/HomePage/component/GlobalLeaderBoard',
};

export default meta;


export const Component = () => {
    return (
        <>
            <GlobalLeaderBoard
                users={undefined}
            />
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}