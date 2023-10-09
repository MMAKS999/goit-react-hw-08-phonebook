import { NavLink } from 'react-router-dom';
import {
  Tab,
} from '@chakra-ui/react/dist/chakra-ui-react.cjs';

export const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">
        <Tab >Register</Tab>
      </NavLink>

      <NavLink to="/login">
        <Tab>Log In</Tab>
      </NavLink>
    </>
  );
};
