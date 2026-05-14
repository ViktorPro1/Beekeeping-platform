import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Articles from "./pages/Articles/Articles";
import ArticlePage from "./pages/Articles/ArticlePage";
import Calendar from "./pages/Calendar/Calendar";
import Diseases from "./pages/Diseases/Diseases";
import Equipment from "./pages/Equipment/Equipment";
import Forum from "./pages/Forum/Forum";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Layout>
  );
}

export default App;
