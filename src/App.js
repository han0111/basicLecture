import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import { Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Route>
      <Route
        path="*"
        element={
          <>
            <div>없는 페이지 입니다.</div>
            <Link to="/">홈으로이동</Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;
