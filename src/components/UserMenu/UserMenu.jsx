import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from '../hooks/useAuth';
import { Button, Flex, Text } from '@chakra-ui/react/dist/chakra-ui-react.cjs';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex ml="50px" alignItems="center">
      <Text fontWeight="bold">Welcome, {user.name}</Text>

      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        ml="20px"
        colorScheme="red"
        variant="outline"
        
      >
        Logout
      </Button>
    </Flex>
  );
};
