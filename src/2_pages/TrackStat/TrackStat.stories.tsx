/* eslint i18next/no-literal-string: "off" */
import { Meta } from '@storybook/react';
import { TrackStat, TrackStatProps } from './TrackStat';
import { Users } from '../../6_shared/api/types';

const meta: Meta<TrackStatProps> = {
  component: TrackStat,
  title: 'features/TrackStat',
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
    },
  ];
  return (
    <>
      <TrackStat trackTitle={'RC rev'} users={users} />
    </>
  );
};

Component.parameters = {
  msw: {
    handlers: [],
  },
};
