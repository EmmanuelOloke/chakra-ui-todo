import { useState } from 'react';

import { Button, HStack, Input } from '@chakra-ui/react';
import React from 'react';

function AddTodo({ addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputContent);
  };

  const [inputContent, setInputContent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="add todo item..."
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
