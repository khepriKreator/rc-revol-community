import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Cell} from '../../6_shared';

export type HeaderProps = {
    gameName: string;
    logo: string;
}

export const Header = ({logo, gameName}: HeaderProps) => {
    return (
        <Navbar>
            <Navbar.Brand>
                <Cell
                    image={logo}
                    primaryText={gameName}
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