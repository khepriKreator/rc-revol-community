import Button from "react-bootstrap/Button";
import {InputGroup} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import {Cell, Text} from "../../6_shared";
import styles from './styles.module.css';

export const PlayerStat = () => {

    // AccountService.accountControllerFindOne
    // TrackRatingsService.statsControllerAccountLeaderBoard
    return (
        <div className={styles.display}>
            <Text size={'XL'} weight={'bold'}>
                {user?.accountUsername}
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
                            Track
                        </Text>
                    </th>
                    <th>
                        <Text color={'white'} size={'S'} weight={'bold'}>
                            Position
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
                    {tracks?.map((track, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <Cell
                                        primaryText={
                                            <Text size={'S'} >
                                                {track.title}
                                            </Text>
                                        }
                                        image={'image'}
                                    />
                                </td>
                                <td>
                                    {user?.position}
                                </td>
                                <td>
                                    {user?.bestLapTime}
                                </td>
                                <td>
                                    {user?.time}
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

