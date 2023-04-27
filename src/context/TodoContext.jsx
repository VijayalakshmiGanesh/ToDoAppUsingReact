import { createContext, useReducer } from "react";

import { todoItems } from "../data/db";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  //Reducer function
  const handleTodos = (acc, value) => {
    // console.log(value);
    switch (value.type) {
      case "Add_Todo":
        return { todo: [...acc.todo, value.payload] };

      case "Remove_Todo":
        return { todo: acc.todo.filter(({ id }) => id !== value.payload) };

      case "Toggle_Todo":
        return {
          todo: acc.todo.map((task) => {
            if (task.id === value.payload.id) {
              return {
                ...task,
                isCompleted: value.payload.completed,
              };
            }
            return task;
          }),
        };

      default:
        console.log("Something went wrong !!");
        break;
    }
    return acc;
  };
  const [state, dispatch] = useReducer(handleTodos, { todo: todoItems });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
