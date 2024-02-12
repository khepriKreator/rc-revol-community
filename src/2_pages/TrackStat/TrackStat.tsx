import {useParams, Link} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import Button from "react-bootstrap/Button";
import {InputGroup} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import {format} from "date-fns";
import {useState} from "react";
import {TrackRatingsService, TracksService} from "../../6_shared/api/generated/game";
import {Cell, Text} from "../../6_shared";
import styles from './styles.module.css';


export const TrackStat = () => {
    const {trackId} = useParams();

    const [page, setPage] = useState(1);

    const {data: trackStat} = useQuery({
        queryKey: [page],
        queryFn: () => TrackRatingsService.statsControllerGetTrackLeaderBoard(`${trackId}`, page, 10, false, search)
    })
    console.log(useParams(), trackStat)

    const {data: track} = useQuery({
        queryKey: [],
        queryFn: () => TracksService.trackControllerFind(`${trackId}`),
    })
    if (!track || !trackStat) {
        return null;
    }


    // ФИЛЬТР
    const [search, setSearch] = useState('')
    const [searchField, setSearchField] = useState('');
    const onApplySearch = () => {
        setSearch(searchField)
        setPage(1);
    }
    
    return (
        <div className={styles.display}>
            <Text size={'XL'} weight={'bold'}>
                {track.title}
            </Text>

            <Form className={styles.form}>
                <InputGroup>
                    <Form.Control onChange={(event) => setSearchField(event.target.value)}/>
                    <Button onClick={() => onApplySearch()}>
                        Filter
                    </Button>
                </InputGroup>
            </Form>
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
                    {trackStat.items.map((item, index) => {
                        const date = Date.parse(item.createdAt)
                        const bestLapTime = item.bestLapTime ? format((item.bestLapTime * 1000), 'm:ss:SSS') : '-';
                        return (
                            <tr key={index}>
                                <td>
                                    {item.position}
                                </td>
                                <td>
                                    <Cell
                                        primaryText={
                                            <Link to={`/account/${item.accountId}`}>
                                                <Text isLink={true} size={'S'}>
                                                    {item.accountUsername}
                                                </Text>
                                            </Link>
                                        }
                                        image={item.accountAvatar}
                                        secondaryText={null}
                                    />
                                </td>
                                <td>
                                    {bestLapTime}
                                </td>
                                <td>
                                    {item.time}
                                </td>
                                <td>
                                    {date}
                                </td>
                                <td>
                                    {item.number}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
};

