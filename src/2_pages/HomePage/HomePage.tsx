import {useQuery} from "@tanstack/react-query";
import Button from 'react-bootstrap/Button';
import {InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import {CustomPagination} from "../../6_shared/components/CustomPagination";
import {TrackRatingsService} from "../../6_shared/api/generated/game";
import {GlobalLeaderBoard} from "./components/GlobalLeaderBoard";
import styles from './styles.module.css'
import {Text} from '../../6_shared';

export const HomePage = () => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1);
    const [searchField, setSearchField] = useState('');

    const {data, isLoading} = useQuery({
        queryKey: [search, page],
        queryFn: () => TrackRatingsService.statsControllerGetGlobalLeaderBoard(page, 10, false, search)
    })
    if (!data) {
        return null;
    }
    console.log(page)
    const onApplySearch = () => {
        setSearch(searchField)
        setPage(1);
    }
    return (
        <div className={styles.homePage}>
            <Text size={'XL'} weight={'bold'}>
                Global Leaderboard
            </Text>

                <Form className={styles.form}>
                    <InputGroup>
                        <Form.Control onChange={(event) => setSearchField(event.target.value)}/>
                        <Button onClick={() => onApplySearch()}>
                            Filter
                        </Button>
                    </InputGroup>
                </Form>
            <GlobalLeaderBoard isLoading={isLoading} users={data?.items}/>
            <CustomPagination currentDataPage={page} setDataPage={(currentPage) => setPage(currentPage)} totalPages={data.meta.totalPages}/>
        </div>
    );
};