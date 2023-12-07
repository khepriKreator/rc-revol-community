/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Cell, CellProps} from './Cell';
import {Text} from "../Text";

const meta: Meta<CellProps> = {
    component: Cell,
    title: 'Cell',
};

export default meta;


export const Component = () => {
    return (
            <Cell
                image={'../../assets/react.svg'}
                primaryText={<Text size={'S'} weight={'bold'} color={'black'}>That Text</Text>}
            />
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}