import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react/dist/chakra-ui-react.cjs';

const { useState } = require('react');

export const PhonebookForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const options = {
    name: value => setName(value),
    number: value => setNumber(value),
  };

  const handleChange = ev => {
    const { name, value } = ev.currentTarget;
    options[name](value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  // считування інформації з інпуту і
  const handleSubmit = ev => {
    ev.preventDefault();
    // Перекидаємо в Арр
    const newContact = { id: nanoid(), name, number };
    onSubmit(newContact);
    reset();
  };

  return (
    <Container boxShadow="base" p="10px" rounded="md" >
      <form onSubmit={handleSubmit}>
        <Stack spacing={5}>
          <label>
            <Text pl="10px" pb="3px" fontWeight="bold">
              Name
            </Text>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
          </label>

          <label>
            <Text pl="10px" pb="3px" fontWeight="bold">
              Number
            </Text>
            <Input
              type="tel"
              name="number"
              placeholder="Number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
            />
          </label>
          <Button type="submit" colorScheme="teal" variant="outline">
            Add contact
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
