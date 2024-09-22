import logo from "./logo.svg";
import "./App.css";
import OurMembers from "./pages/OurMembers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <OurMembers />
      <Footer />
    </div>
  );
}

export default App;
