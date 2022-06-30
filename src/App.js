import React from 'react';
import { useState, useEffect } from 'react';

import { Heading } from '@chakra-ui/react';
import { VStack, IconButton } from '@chakra-ui/react';

import { FaSun, FaMoon } from 'react-icons/fa';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [] // getItem returns a string, and we convert that string into an array using JSON.parse. To prevernt the JSON.parse from getting executed on every re-render, we have to pass it as a function. It is unneccessary to execute it on every rerender because initial state is only used on the first render.
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); // useEffect will fire whenever the todos state changes, that's why we pass [todos] to it as a dependency. Then we use JSON.Stringify to convert the todos we get to string
  }, [todos]);

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodo);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
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
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
