import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { TrackRatingDto } from '../../../../6_shared/api/generated/game';
import { Cell, Text } from '../../../../6_shared';
import styles from './styles.module.css';

export type GlobalLeaderBoardProps = {
  isLoading: boolean;
  isPlaceholderData: boolean;
  users: TrackRatingDto[] | undefined;
};

export const GlobalLeaderBoard = ({
  users,
  isLoading,
    isPlaceholderData,
}: GlobalLeaderBoardProps) => {
  if (users === undefined) {
    return null;
  }
  return (
    <>
      <Table borderless striped>
        <thead>
          <tr>
            <th className={styles.position}>Position</th>
            <th>Player</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {(isLoading || isPlaceholderData) ? (
            <GlobalLeaderBoardSkeleton />
          ) : (
            users?.map((user, index) => {
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
                  <td>{user.number}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </>
  );
};

export const GlobalLeaderBoardSkeleton = () => {
  return (
    <>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <tr key={index}>
            <td>
              <Skeleton height={16} width={60}/>
            </td>
            <td>
              <div className={styles.skeletonMiddle}>
                <Skeleton className={styles.skeletonMiddleImg}  height={'40px'} width={'40px'} />
                  <Skeleton height={16} width={200} />
              </div>
            </td>
            <td>
              <Skeleton height={16} width={60}/>
            </td>
          </tr>
        ))}
    </>
  );
};
