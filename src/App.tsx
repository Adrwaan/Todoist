import Container from "./components/Container";
import Infobar from "./components/Infobar";
import Title from "./components/Title";
import TodoContainer from "./components/TodoContainer";

export default function App() {
  return (
    <main className="min-w-screen h-dvh bg-gradient-to-tl from-primary-purple-900 to-primary-purple-200 flex items-center justify-center text-white">
      <Container className="w-7/12 h-5/6 bg-white rounded-[20px]">
        <Title />
        <div className="p-4 h-full flex flex-col gap-y-4">
          <Infobar />
          <TodoContainer />
        </div>
      </Container>
    </main>
  );
}
