import { useContext, useEffect } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import Container from "../Container";

function TodoInput() {
  const { pushTodo } = useContext(TodoContext)!;

  useEffect(() => {
    pushTodo({ title: "teste", done: false });
  });

  return (
    <input
      type="text"
      min={1}
      max={120}
      placeholder="Digite o título para um novo todo:"
      className="w-full h-8 bg-stone-100 rounded-lg px-2 placeholder:text-base"
    />
  );
}

// function TodoLi() {}

export default function TodoContainer() {
  const { todos } = useContext(TodoContext)!;

  return (
    <Container className="min-w-full rounded-xl bg-grey text-black p-3 overflow-y-auto">
      <TodoInput />
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </Container>
  );
}
