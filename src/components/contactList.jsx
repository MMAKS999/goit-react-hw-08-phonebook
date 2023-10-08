import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Flex,
  Spacer,
  Avatar,
  Text,
} from '@chakra-ui/react/dist/chakra-ui-react.cjs';

export const ContactList = ({ dataContacts, onDelateContact }) => {
  return (
    <div>
      <Flex flexDirection="column" gap="2">
        {dataContacts &&
          dataContacts.map(({ id, name, number }) => (
            <Flex
              name={id}
              key={id}
              boxShadow="base"
              p="2"
              rounded="lg"
              alignItems="center"
            >
              <Avatar size="sm" name={name} />
              <Box ml="10px" w="50%">
                <Text>{name}</Text>{' '}
              </Box>
              <Spacer />
              <Box w="50%"> {number}</Box>
              <Spacer />
              <Button
                w="10%"
                size="xs"
                type="button"
                colorScheme="red"
                ml="10px"
                variant="outline"
                onClick={() => onDelateContact(id)}
              >
                Delete
              </Button>
            </Flex>
          ))}
      </Flex>
    </div>
  );
};

ContactList.propTypes = {
  dataContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelateContact: PropTypes.func.isRequired,
};
