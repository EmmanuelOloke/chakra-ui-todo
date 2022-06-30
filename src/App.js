import React from 'react';

import { Heading } from '@chakra-ui/react';
import { VStack, IconButton } from '@chakra-ui/react';

import { FaSun, FaMoon } from 'react-icons/fa';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList />
      <AddTodo />
    </VStack>
  );
}

export default App;
