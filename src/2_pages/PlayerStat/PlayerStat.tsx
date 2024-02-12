import {useParams, Link} from 'react-router-dom';
import {useQuery} from "@tanstack/react-query";
import Table from "react-bootstrap/Table";
import {format} from 'date-fns';
import {useState} from "react";
import {TrackRatingsService, AccountService} from "../../6_shared/api/generated/game";
import {Cell, Text} from "../../6_shared";
import styles from './styles.module.css';

export const PlayerStat = () => {
    const {accountId} = useParams();
    const {data: user} = useQuery({
        queryKey: [],
        queryFn: () => AccountService.accountControllerFindOne(Number(accountId))
    })
    const [page, setPage] = useState(1);
    const {data} = useQuery({
        queryKey: [page],
        queryFn: () => TrackRatingsService.statsControllerGetAccountLeaderBoard(Number(accountId), page, 10, false)
    })
    if (!data) {
        return null;
    }
    if (!user) {
        return null;
    }
    const {items: tracks} = data;

    return (
        <div className={styles.display}>
            <Cell
                primaryText={<Text size={'XL'} weight={'bold'}>
                    {user?.username}
                </Text>}
                image={user.avatar}
                secondaryText={null}
            />
            <Table borderless striped>
                <thead>
                <tr>
                    <th>
                            Track
                    </th>
                    <th>
                            Position
                    </th>
                    <th>
                            Best Lap Time
                    </th>
                    <th>
                            Time
                    </th>
                    <th>
                            Date
                    </th>
                    <th>
                            Number of Tries
                    </th>
                </tr>
                </thead>
                <tbody>
                    {tracks.map((track, index) => {
                        const date = Date.parse(track.createdAt)
                        const bestLapTime = track.bestLapTime ? format((track.bestLapTime * 1000), 'm:ss:SSS') : '-';
                        return (
                            <tr key={index}>
                                <td>
                                    <Cell
                                        primaryText={
                                            <Link to={`/tracks/${track.trackPublicId}`}>
                                                <Text isLink={true} size={'S'}>
                                                    {track.trackPublicId}
                                                </Text>
                                            </Link>
                                        }
                                        image={null}
                                        secondaryText={null}
                                    />
                                </td>
                                <td>
                                    {track.position}
                                </td>
                                <td>
                                    {bestLapTime}
                                </td>
                                <td>
                                    {track.time}
                                </td>
                                <td>
                                    {format(date, 'yyyy-MM-dd HH:mm')}
                                </td>
                                <td>
                                    {track.number}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
};

