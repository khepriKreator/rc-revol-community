import Pagination from "react-bootstrap/Pagination";
import {useQuery} from "@tanstack/react-query";
import Button from 'react-bootstrap/Button';
import {InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import {TrackRatingsService} from "../../6_shared/api/generated/game";
import {GlobalLeaderBoard} from "./components/GlobalLeaderBoard";
import styles from './styles.module.css'
import {Text} from '../../6_shared';

export const HomePage = () => {
    const [qKeys, setQKeys] = useState({
        search: '',
        page: 1,
    })
    const [searchField, setSearchField] = useState('');

    const {statsControllerGlobalLeaderBoard} = TrackRatingsService;

    const {data, isSuccess, isError} = useQuery({
        queryKey: [qKeys.search, qKeys.page],
        queryFn: () => statsControllerGlobalLeaderBoard(qKeys.page, 10, false, qKeys.search)
    })
    if (isError) {
        console.log(null)
        return null;
    }
    if (isSuccess) {
        console.log(data)
    }


    const onApplySearch = () => {
        setQKeys({
            search: searchField,
            page: 1,
        })
    }

    /**
     * получить глобальный лидерборд
     * TrackRatingsService.statsControllerGlobalLeaderBoard()
     * */

    // useQuery(['', state], () =>)

    return (
        <div className={styles.homePage}>
            <Text size={'XL'} weight={'bold'}>
                Global leaderboard
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
            <GlobalLeaderBoard users={data}/>
        </div>
    );
};