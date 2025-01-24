import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import Container from "../Container";
import { SendHorizontal } from "lucide-react";

function TodoInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const { pushTodo } = useContext(TodoContext)!;

  function inputHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (inputValue && inputValue.length > 0) {
        pushTodo({ title: inputValue });
      } else {
        throw Error("The to-do cannot be empty!");
      }
      setInputValue("");
    }
  }

  function btnHandler() {
    if (inputValue && inputValue.length > 0) {
      pushTodo({ title: inputValue });
    } else {
      throw Error("The to-do cannot be empty!");
    }
    setInputValue("");
  }

  return (
    <div className="flex flex-row justify-between min-w-full h-max">
      <input
        id="todo-input"
        type="text"
        min={1}
        max={120}
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        onKeyDown={inputHandler}
        placeholder="Ex.: Make a web app with react"
        className="w-full min-h-10 border border-gray-300 bg-white rounded-l-lg px-4 placeholder:text-sm placeholder:font-medium placeholder:text-gray-600 text-black text-sm outline-none"
      />
      <button
        onClick={btnHandler}
        className="bg-primary-purple-900 rounded-r-lg size-10 flex justify-center items-center hover:bg-primary-purple-800 transition-colors duration-300"
      >
        <SendHorizontal strokeWidth={2} className="size-6" />
      </button>
    </div>
  );
}

function TodoLi({ title, id }: { id: string; title: string }) {
  return (
    <li
      className="flex h-min rounded-md w-full bg-white px-3 py-1 overflow-hidden"
      key={id}
    >
      <input type="checkbox" />
      <span className="w-full pl-4 font-semibold text-black text-nowrap text-clip">
        {title}
      </span>
    </li>
  );
}

export default function TodoContainer() {
  const { todos } = useContext(TodoContext)!;

  return (
    <>
      <Container className="w-full h-max gap-1">
        <label
          htmlFor="todo-input"
          className="text-black text-sm font-medium pl-1"
        >
          Enter the title for a new to-do:
        </label>
        <TodoInput />
      </Container>
      <Container className="min-w-full h-full rounded-xl bg-grey text-black p-3 overflow-y-auto">
        <ul className="flex flex-col gap-2">
          {todos.map((todo) => (
            <TodoLi id={todo.id} title={todo.title} />
          ))}
        </ul>
      </Container>
    </>
  );
}
