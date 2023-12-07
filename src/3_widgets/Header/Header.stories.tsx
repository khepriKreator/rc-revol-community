/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Header, HeaderProps} from './Header';

const meta: Meta<HeaderProps> = {
    component: Header,
    title: 'Header',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Header
            />
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}