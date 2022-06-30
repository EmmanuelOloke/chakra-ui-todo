import React from 'react';
import { useState } from 'react';

import { Button, HStack, Input, useToast } from '@chakra-ui/react';

import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputContent) {
      toast({
        title: 'Please Enter a Todo Item',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: inputContent,
    };

    addTodo(todo);

    setInputContent('');
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
