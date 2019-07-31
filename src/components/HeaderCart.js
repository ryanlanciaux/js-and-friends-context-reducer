import React, { useContext } from "react";
import { Flex } from "rebass";

import Button from "./Button";

import { GlobalContext } from "./GlobalStateProvider";

function getItemTotal(items) {
  return items && items.reduce((acc, next) => next.quantity + acc, 0);
}

function HeaderCart({ itemCount, onClick, showingCart }) {
  /*
  We need to update this to use the globalContext hook
  Tip: useContext(ContextObject)

  Tip: 
  Our context has state and dispatch as properties (coming from the reducer).
  */
  const itemTotal = 0;

  return (
    <Button bg="#EDEDED" color="#333" onClick={onClick}>
      <Flex alignItems="center">
        <span>
          {showingCart ? "Back to Shop" : `Checkout (${itemTotal || 0} items)`}
        </span>
      </Flex>
    </Button>
  );
}

export default HeaderCart;
