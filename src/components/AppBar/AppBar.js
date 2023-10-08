import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';
import {
  Tabs,
  TabList,
  FormControl,
  Button,
} from '@chakra-ui/react/dist/chakra-ui-react.cjs';
import { useColorMode } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Tabs size="md" variant="enclosed" align="center">
        <TabList>
          <Navigation />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}

          <FormControl display="flex" alignItems="center" w="15" ml='10px'>
            <Button onClick={toggleColorMode}>
               {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
          </FormControl>
        </TabList>
      </Tabs>
    </>
  );
};
