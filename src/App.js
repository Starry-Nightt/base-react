import Footer from "./layouts/footer/footer";
import Header from "./layouts/header/header";
import Todo from "./pages/todo/todo";
import Router from "./shared/routes";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="flex-1">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
