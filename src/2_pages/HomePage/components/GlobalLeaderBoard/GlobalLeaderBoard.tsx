import Table from 'react-bootstrap/Table';
import {TrackRatingDto} from "../../../../6_shared/api/generated/game";
import {Cell, Text} from '../../../../6_shared';

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
                {users?.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>
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