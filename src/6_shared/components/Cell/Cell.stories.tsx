/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Cell, CellProps} from './Cell';
import {Text} from "../Text";

const meta: Meta<CellProps> = {
    component: Cell,
    title: 'shared/components/Cell',
};

export default meta;


export const Component = () => {
    return (
            <Cell
                secondaryText={<Text size={'S'} color={'black'}>That Secondary Text</Text>}
                image={'../../assets/react.svg'}
                primaryText={<Text size={'M'} weight={'bold'} color={'black'}>That Primary Text</Text>}
            />
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}