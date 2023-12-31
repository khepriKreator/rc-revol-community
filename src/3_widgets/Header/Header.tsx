import {NavLink} from 'react-router-dom'
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import styles from './styles.module.css';
import {Cell} from '../../6_shared';


export const Header = () => {
    return (
        <Navbar className={styles.header}>
            <Navbar.Brand>
                <Cell
                    primaryText={
                        <NavLink className={styles.title} to={'/'}>RC Revolution Community</NavLink>
                    }
                    image={''}
                />
            </Navbar.Brand>
            <Nav>
                <Nav.Item>
                    <Nav.Link>
                        <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.inactiveLink} to={'/'}>Home</NavLink>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.inactiveLink} to={'/tracks'}>Time Trial leaderboards</NavLink>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.inactiveLink} to={'/faq'}>Faq</NavLink>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};