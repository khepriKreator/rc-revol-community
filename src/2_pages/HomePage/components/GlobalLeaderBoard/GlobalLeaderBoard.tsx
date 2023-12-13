import Table from 'react-bootstrap/Table';
import {Users} from '../../../../6_shared/api/types';
import {Cell, Text} from '../../../../6_shared'

export type GlobalLeaderBoardProps = {
    users: Users;
}

export const GlobalLeaderBoard = ({users}: GlobalLeaderBoardProps) => {
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
                {users.map((user, index) => {
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