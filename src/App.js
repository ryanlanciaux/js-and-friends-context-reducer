import React, { useContext, useState } from "react";

import ItemCardGroup from "./components/ItemCardGroup";
import Header from "./components/Header";
import "./styles.css";

import Search from "./components/Search";
import useCoffeeData from "./hooks/useCoffeeData";
import { GlobalContext } from "./components/GlobalStateProvider";
import Cart from "./components/Cart";

function App() {
  const { data, isLoading, error, setFilter } = useCoffeeData();
  const [shouldShowCart, setShouldShowCart] = useState(false);
  /*
  In this file, we want to dispatch an action 
    The action should look like
    { type: 'ADD_ITEM', payload: { title: 'Latte', ... }}

  Tip: const { dispatch } = useContext(ContextObject)
    Our context has state and dispatch as properties (coming from the reducer).
    We only need 'dispatch'

  See Cart.js for an example (in the CartContainer)
  */

  const onAddToCart = item => {};

  return (
    <>
      <Header
        onToggleCart={() => {
          setShouldShowCart(showCart => !showCart);
        }}
        showingCart={shouldShowCart}
      />
      {shouldShowCart ? (
        <Cart />
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {error ? (
            <span>Oh no. An error occurred. {error}</span>
          ) : isLoading ? (
            <span>Loading</span>
          ) : (
            <>
              <Search onEnter={filter => setFilter(filter)} />
              <ItemCardGroup data={data} onAddToCart={onAddToCart} />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
