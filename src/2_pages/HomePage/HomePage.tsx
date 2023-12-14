import Button from 'react-bootstrap/Button';
import {InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {GlobalLeaderBoard} from "./components/GlobalLeaderBoard";
import {Users} from "../../6_shared/api/types";
import styles from './styles.module.css'
import {Text} from '../../6_shared';
import {TrackRatingsService} from "../../6_shared/api/generated/game";
import {useQuery} from "@tanstack/react-query";

export type HomePageProps = {
    users: Users;
}

export const HomePage = ({users}: HomePageProps) => {
    // стейт для запроса
    // useState({
    //     search: '',
    //     page: 1,
    // })

    // поле ввода поиска
    // useState('')


    // не забыть пагинацию обнулить
    // onApplySearch =() =>

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
            <GlobalLeaderBoard users={users}/>
        </div>
    );
};