import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Input,
  Flex,
} from '@chakra-ui/react/dist/chakra-ui-react.cjs';

export const Filter = ({ value, onChange }) => (
  <label>
    <Flex alignItems="center" mb="20px" boxShadow="base" rounded="md" p="10px">
      <Text pr="10px" textAlign= 'center' fontWeight= 'bold'>Find contacts by name</Text>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Username"
      />
    </Flex>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
