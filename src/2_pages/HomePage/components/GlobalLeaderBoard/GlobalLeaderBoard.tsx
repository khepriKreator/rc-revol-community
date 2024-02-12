import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'
import {TrackRatingDto} from "../../../../6_shared/api/generated/game";
import {Cell, Text} from '../../../../6_shared';
import styles from './styles.module.css';

export type GlobalLeaderBoardProps = {
    users: TrackRatingDto[] | undefined;
}

export const GlobalLeaderBoard = ({users}: GlobalLeaderBoardProps) => {
    if (users === undefined) {
        return null;
    }

    return (
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
                {users?.map((user, index) => {
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
    );
};