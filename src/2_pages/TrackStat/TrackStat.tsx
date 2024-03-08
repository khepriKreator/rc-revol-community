import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { format } from 'date-fns';
import { useState } from 'react';
import {
  TrackRatingsService,
  TracksService,
} from '../../6_shared/api/generated/game';
import { Cell, Text } from '../../6_shared';
import styles from './styles.module.css';

const Q_KEY1 = 'statsControllerGetTrackLeaderBoard';
const Q_KEY2 = 'trackControllerFind';
export const TrackStat = () => {
  const { trackId } = useParams();
  // СТЕЙТЫ
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchField, setSearchField] = useState('');
  // КВЕРИКИ
  const { data: trackStat } = useQuery({
    queryKey: [Q_KEY1, search, page],
    queryFn: () =>
      TrackRatingsService.statsControllerGetTrackLeaderBoard(
        `${trackId}`,
        page,
        10,
        false,
        search,
      ),
  });
  const { data: track, isLoading } = useQuery({
    queryKey: [Q_KEY2, trackId],
    queryFn: () => TracksService.trackControllerFind(`${trackId}`),
  });
  if (!track || !trackStat) {
    return null;
  }
  // ФИЛЬТР
  const onApplySearch = () => {
    setSearch(searchField);
    setPage(1);
  };

  return (
    <div className={styles.display}>
      <Text size={'XL'} weight={'bold'}>
        {track.title}
      </Text>

      <Form className={styles.form}>
        <InputGroup>
          <Form.Control
            onChange={(event) => setSearchField(event.target.value)}
          />
          <Button onClick={() => onApplySearch()}>Filter</Button>
        </InputGroup>
      </Form>
      <Table borderless striped>
        <thead>
          <tr>
            <th>Position</th>
            <th>Player</th>
            <th>Best Lap Time</th>
            <th>Time</th>
            <th>Date</th>
            <th>Number of Tries</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <TrackStatSkeleton />
          ) : (
            trackStat.items.map((user, index) => {
              const date = Date.parse(user.createdAt);
              const bestLapTime = user.bestLapTime
                ? format(user.bestLapTime * 1000, 'm:ss:SSS')
                : '-';
              const time = user.time
                ? format(user.time * 1000, 'm:ss:SSS')
                : '-';
              return (
                <tr key={index}>
                  <td>{user.position}</td>
                  <td>
                    <Cell
                      primaryText={
                        <Link to={`/account/${user.accountId}`}>
                          <Text isLink={true} size={'S'}>
                            {user.accountUsername}
                          </Text>
                        </Link>
                      }
                      image={user.accountAvatar}
                      secondaryText={null}
                    />
                  </td>
                  <td>{bestLapTime}</td>
                  <td>{time}</td>
                  <td>{format(date, 'yyyy-MM-dd HH:mm')}</td>
                  <td>{user.number}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </div>
  );
};

export const TrackStatSkeleton = () => {
  return (
    <>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <tr key={index}>
            <td>
              <Skeleton height={16} />
            </td>
            <td>
              <div className={styles.skeletonPlayer}>
                <Skeleton height={'40px'} width={'40px'} />
                <div className={'w-100 align-middle'}>
                  <Skeleton height={16} />
                </div>
              </div>
            </td>
            <td>
              <Skeleton height={16} />
            </td>
            <td>
              <Skeleton height={16} />
            </td>
            <td>
              <Skeleton height={16} />
            </td>
            <td>
              <Skeleton height={16} />
            </td>
          </tr>
        ))}
    </>
  );
};
