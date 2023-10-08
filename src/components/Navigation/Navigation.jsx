import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Tab,  } from '@chakra-ui/react/dist/chakra-ui-react.cjs';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavLink to="/">
        <Tab>Home</Tab>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts">
          <Tab>Contact</Tab>
        </NavLink>
      )}
    </>
  );
};
