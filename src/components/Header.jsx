import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Icon } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import '../cssModules/Header.css';
export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <Link to="/">
          <Icon as={FaHome} w={10} h={8}></Icon>
          <Button size="sm" colorScheme="teal">
            Home
          </Button>
        </Link>
      </div>
      <ButtonGroup spacing={3} className="headerRight">
        <Link to="/login">
          <Button size="sm" colorScheme={'teal'}>
            Login
          </Button>
        </Link>

        <Link to="/signup">
          <Button size="sm" colorScheme="teal">
            Register
          </Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}
