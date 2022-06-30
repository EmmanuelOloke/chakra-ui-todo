import React from 'react';

import { Heading } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <VStack>
      <Heading>Todo Application</Heading>
      <TodoList>Somthing in here</TodoList>
      <AddTodo>Another thing in here</AddTodo>
    </VStack>
  );
}

export default App;
