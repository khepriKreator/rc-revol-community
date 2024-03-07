import "react-loading-skeleton/dist/skeleton.css"
import Skeleton from "react-loading-skeleton";
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'
import {TrackRatingDto} from "../../../../6_shared/api/generated/game";
import {Cell, Text} from '../../../../6_shared';
import styles from './styles.module.css';

export type GlobalLeaderBoardProps = {
    isLoading: boolean;
    users: TrackRatingDto[] | undefined;
}

export const GlobalLeaderBoard = ({users, isLoading}: GlobalLeaderBoardProps) => {
    if (users === undefined) {
        return null;
    }
    return (
        <>
        <Table borderless striped>
            <thead>
                <tr>
                    <th className={styles.position}>
                            Position
                    </th>
                    <th>
                            Player
                    </th>
                    <th>
                            Points
                    </th>
                </tr>
            </thead>
            <tbody>
                {isLoading ? <GlobalLeaderBoardSkeleton/> : users?.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                {user.position}
                            </td>
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
                            <td>
                                {user.number}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        </>
    );
};

export const GlobalLeaderBoardSkeleton = () => {
    return (
        <>
            {Array(10).fill(null).map((_, index) =>
                    <tr key={index}>
                        < td >
                            < Skeleton height={16}/>
                        </td>
                        <td>
                            <div className={styles.skeletonMiddle}>
                                <Skeleton height={'40px'} width={'40px'}/>
                                <div className={'w-100 align-middle'}>
                                <Skeleton height={16}/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <Skeleton height={16}/>
                        </td>
                    </tr>
                )
            }
        </>
    )
}