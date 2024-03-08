/* eslint i18next/no-literal-string: "off" */
import { HomePage } from './HomePage';

const meta = {
  component: HomePage,
  title: 'pages/HomePage',
};

export default meta;

export const Component = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

Component.parameters = {
  msw: {
    handlers: [],
  },
};
