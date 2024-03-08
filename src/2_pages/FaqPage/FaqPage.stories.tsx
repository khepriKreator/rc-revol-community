/* eslint i18next/no-literal-string: "off" */
import { Meta } from '@storybook/react';
import { FaqPage, FaqPageProps } from './FaqPage';

const meta: Meta<FaqPageProps> = {
  component: FaqPage,
  title: 'FaqPage',
};

export default meta;

export const Component = () => {
  return (
    <>
      <FaqPage />
    </>
  );
};

Component.parameters = {
  msw: {
    handlers: [],
  },
};
