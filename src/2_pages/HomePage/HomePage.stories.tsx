/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {HomePage, HomePageProps} from './HomePage';
import {Users} from "../../6_shared/api/types";

const meta: Meta<HomePageProps> = {
    component: HomePage,
    title: 'pages/HomePage',
};

export default meta;


export const Component = () => {
    const users: Users = [
        {
            accountAvatar: 'string',
            accountId: 0,
            accountUsername: 'string',
            bestLapTime: 0,
            createdAt: Date.now(),
            id: 0,
            isDemo: true,
            number: 0,
            position: 'string',
            time: 0,
            trackPublicId: 'string',
            updatedAt: Date.now(),
        },
        {
            accountAvatar: 'string',
            accountId: 0,
            accountUsername: 'string',
            bestLapTime: 0,
            createdAt: Date.now(),
            id: 0,
            isDemo: true,
            number: 0,
            position: 'string',
            time: 0,
            trackPublicId: 'string',
            updatedAt: Date.now(),
        },
        {
            accountAvatar: 'string',
            accountId: 0,
            accountUsername: 'string',
            bestLapTime: 0,
            createdAt: Date.now(),
            id: 0,
            isDemo: true,
            number: 0,
            position: 'string',
            time: 0,
            trackPublicId: 'string',
            updatedAt: Date.now(),
        }
    ]

    return (
        <>
            <HomePage users={users}/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}