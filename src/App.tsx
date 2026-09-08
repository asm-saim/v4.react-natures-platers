import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Products from "./components/Products";
import { Suspense, useState } from "react";
import { IProduct } from "./type/product";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart";

// promise based data fetching
const userData = async (): Promise<IProduct[]> => {
  const response = await fetch("/public/productData.json");
  const data = await response.json();
  return data;
};
const userDataPromise = userData(); // Call the function to get the promise

function App() {
  // state declare to store and update carts:
  const [cart, setCart] = useState<IProduct[]>([]);
  const handleCart = (product: IProduct) => {
    // console.log(product);
    setCart([...cart, product]);
    
  };
  console.log("Cart:", cart);

  return (
    <>
      <Nav cart={cart}></Nav>
      <Banner></Banner>
      <Cart cart={cart}></Cart>
      <Services></Services>
      <Suspense fallback="Loading....">
        <Products handleCart={handleCart} userData={userDataPromise}></Products>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
