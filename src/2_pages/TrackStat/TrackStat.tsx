import Button from "react-bootstrap/Button";
import {InputGroup} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import {Cell, Text} from "../../6_shared";
import styles from './styles.module.css';
import {TracksService} from "../../6_shared/api/generated/game";

export const TrackStat = () => {

 // TrackRatingsService.statsControllerTrackLeaderBoard
 // TracksService.trackControllerFind

    return (
        <div className={styles.display}>
            <Text size={'XL'} weight={'bold'}>
                ss
            </Text>

            <Form className={styles.form}>
                <InputGroup>
                    <Form.Control>

                    </Form.Control>
                    <Button>
                        Filter
                    </Button>
                </InputGroup>
            </Form>
            <Table borderless striped>
                <thead>
                <tr>
                    <th>
                        <Text color={'white'} size={'S'} weight={'bold'}>
                            Position
                        </Text>
                    </th>
                    <th>
                        <Text color={'white'} size={'S'} weight={'bold'}>
                            Player
                        </Text>
                    </th>
                    <th>
                        <Text color={'white'} size={'S'} weight={'bold'}>
                            Best Lap Time
                        </Text>
                    </th>
                    <th>
                        <Text color={'white'} size={'S'} weight={'bold'}>
                            Time
                        </Text>
                    </th>
                    <th>
                        <Text color={'white'} size={'S'} weight={'bold'}>
                            Date
                        </Text>
                    </th>
                    <th>
                        <Text color={'white'} size={'S'} weight={'bold'}>
                            Number of Tries
                        </Text>
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
                                    {user.bestLapTime}
                                </td>
                                <td>
                                    {user.time}
                                </td>
                                <td>
                                    date
                                </td>
                                <td>
                                    number of tries
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
};

