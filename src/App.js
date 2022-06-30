import React from 'react';
import { useState, useEffect } from 'react';

import { Heading } from '@chakra-ui/react';
import { VStack, IconButton } from '@chakra-ui/react';

import { FaSun, FaMoon } from 'react-icons/fa';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const initalTodos = [
    {
      id: 1,
      body: 'get bread',
    },
    {
      id: 2,
      body: 'get butter',
    },
  ];

  const [todos, setTodos] = useState(initalTodos);

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodo);
  };

  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        pb={8}
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo />
    </VStack>
  );
}

export default App;
