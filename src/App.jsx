import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col relative w-full scroll-smooth">
      <Header />
      <Main />
    </div>
  );
}

export default App;
