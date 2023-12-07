/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Text, TextProps} from './Text';

const meta: Meta<TextProps> = {
    component: Text,
    title: 'Text',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Text
                children={'That text'}
                color={'default'}
                size={'S'}
                weight={'default'}
            />
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}