/* eslint i18next/no-literal-string: "off" */
import {Layout} from './Layout';

const meta = {
    component: Layout,
    title: 'widgets/Layout',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Layout/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}