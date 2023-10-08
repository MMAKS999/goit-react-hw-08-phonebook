import {
  Box,
  Button,
  Center,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react/dist/chakra-ui-react.cjs';

import { useDispatch } from 'react-redux';
import { registerUS } from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerUS({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Center>
      <Box
        my="200px"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
      >
        <form onSubmit={handleSubmit} autoComplete="off">
          <Stack spacing={3}>
            <label>
              <Text pl="10px" pb="3px">
                Username
              </Text>
              <Input type="text" placeholder="Username" name="name" />
            </label>
            <label>
              <Text pl="10px" pb="3px">
                Email
              </Text>
              <Input type="email" name="email" placeholder="Email" />
            </label>
            <label>
              <Text pl="10px" pb="3px">
                Password
              </Text>
              <Input type="password" name="password" placeholder="Password" />
            </label>
            <Button type="submit" colorScheme="teal" variant="outline">
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};
