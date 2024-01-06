import Table from 'react-bootstrap/Table';
import {TrackRatingDto} from "../../../../6_shared/api/generated/game";
import {Cell, Text} from '../../../../6_shared';
import styles from './styles.module.css'

export type GlobalLeaderBoardProps = {
    users: TrackRatingDto[] | undefined;
}

export const GlobalLeaderBoard = ({users}: GlobalLeaderBoardProps) => {
    if (users === undefined) {
        return null;
    }
    const sortedUsers = users.sort((a, b) => {
        if (Number(a.position) > Number(b.position)) {
            return 1
        } if (Number(a.position) < Number(b.position)) {
            return -1
        } else {
            return 0
        }
    })

    return (
        <Table borderless striped>
            <thead>
                <tr className={styles.header}>
                    <th>
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
                {sortedUsers?.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td className={styles.position}>
                                {user.position}
                            </td>
                            <td>
                                <Cell
                                    primaryText={
                                        <Text size={'S'} >
                                            {user.accountUsername}
                                        </Text>
                                    }
                                    image={user.accountAvatar}
                                    secondaryText={null}
                                />
                            </td>
                            <td className={styles.score}>
                                {user.number}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
};