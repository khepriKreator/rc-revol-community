import Button from 'react-bootstrap/Button';
import {InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {GlobalLeaderBoard} from "./components/GlobalLeaderBoard";
import {Users} from "../../6_shared/api/types";
import styles from './styles.module.css'
import {Text} from '../../6_shared';

export type HomePageProps = {
    users: Users;
}

export const HomePage = ({users}: HomePageProps) => {
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