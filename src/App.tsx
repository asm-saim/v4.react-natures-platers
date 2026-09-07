import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Products from "./components/Products";
import { Suspense } from "react";
import { IProduct } from "./type/product";

// promise based data fetching
const userData = async (): Promise<IProduct[]> => {
  const response = await fetch("/public/productData.json");
  const data = await response.json();
  return data;
};

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Services></Services>
      <Suspense fallback="Loading....">
        <Products userData={userData()}></Products>
      </Suspense>
    </>
  );
}

export default App;
