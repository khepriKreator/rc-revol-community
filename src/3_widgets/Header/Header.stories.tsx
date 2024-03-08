/* eslint i18next/no-literal-string: "off" */
import { Meta } from '@storybook/react';
import { Header } from './Header';

const meta: Meta = {
  component: Header,
  title: 'widgets/Header',
};

export default meta;

export const Component = () => {
  return (
    <>
      <Header />
    </>
  );
};

Component.parameters = {
  msw: {
    handlers: [],
  },
};
