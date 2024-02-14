/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {CustomPagination, PaginationProps} from './CustomPagination.tsx';

const meta: Meta<PaginationProps> = {
    component: CustomPagination,
    title: 'shared/components/CustomPagination',
};

export default meta;


export const Component = () => {
    return (
        <>
            <CustomPagination
                page={1}
                totalPages={10}
                onClLast={() => console.log('click')}
                onClFirst={() => console.log('click')}
                onClNext={() => console.log('click')}
                onClPrev={() => console.log('click')}
            />
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}