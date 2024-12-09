import TodoApp from "./TodoApp";

export function App() {
  
  return (
    <div className="font-sans flex flex-col gap-y-7 lg:gap-y-10">
      <header className="bg-main py-1.5 lg:py-2">
        <h1 className="text-4xl w-fit mx-auto">TO<span className="text-orange">DO</span></h1>
      </header>
      <main className="flex flex-col gap-5 md:gap-6 w-[92%] max-w-[400px] mx-auto">
        <TodoApp/>
      </main>
    </div>
  );
}

export default App;
