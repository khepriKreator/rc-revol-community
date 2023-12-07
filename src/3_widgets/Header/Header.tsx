import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Cell, Text} from '../../6_shared';
import styles from './styles.module.css';


export const Header = () => {
    return (
        <Navbar className={styles.header}>
            <Navbar.Brand>
                <Cell
                    primaryText={
                        <Text color={'white'} size={'M'} weight={'bold'}>
                            RC Revolution Community
                        </Text>
                }
                    image={''}
                />
            </Navbar.Brand>
            <Nav>
                <Nav.Item>
                    <Nav.Link>
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Time Trial leaderboards
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Faq
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};