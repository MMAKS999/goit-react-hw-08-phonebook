import {
  Button,
  Center,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react/dist/chakra-ui-react.cjs';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <Container as="section" maxWidth="4xl" pt="200px">
      <Center>
        <NavLink to="/register">
          <Button boxShadow="dark-lg" p="6" rounded="md" >
            <Heading my="30px" color="blue.300">
              <Text>
                {' '}
                &#x1F5F9; Phone book welcome page
                <span role="img" aria-label="Greeting icon">
                  &#9742;{' '}
                </span>
              </Text>
            </Heading>
          </Button>
        </NavLink>
      </Center>
    </Container>
  );
}
