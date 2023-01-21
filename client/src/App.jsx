import "./App.scss";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Routing from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
