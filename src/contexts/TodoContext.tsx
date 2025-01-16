import { createContext, ReactNode, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoType } from "../types/TodoType";

interface TodoContextType {
  todos: TodoType[];
  pushTodo: (todo: Omit<TodoType, "id" | "timestamp">) => void;
  popTodo: (index?: number) => void;
}

interface TodoProviderProps {
  children: ReactNode;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  function pushTodo(todo: Omit<TodoType, "id" | "timestamp">) {
    setTodos((state) => [
      ...state,
      {
        ...todo,
        id: uuid(),
        timestamp: new Date(),
      },
    ]);
  }

  function popTodo(index: number | undefined) {
    if (index && index >= 0 && typeof index === "number") {
      setTodos((state) =>
        state.filter((_todo, index) => !(state.length - 1 === index))
      );
    } else {
      setTodos((state) => {
        const newState = state;
        newState.pop();
        return newState;
      });
    }
  }

  return (
    <TodoContext.Provider value={{ todos, pushTodo, popTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
