import { useState } from "react";

export default function CartCount() {
    const [cartno, setCartno] = useState(0);

  // Function to decrement count if it's greater than 0
  const hCartno = () => {
    if (cartno > 0) {
      setCartno((a) => a - 1);
    }
  };

}