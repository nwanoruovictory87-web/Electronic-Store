import { createContext, useContext, useState } from "react";

const OrderDataContext = createContext(null);

export function OrderContext({ children }) {
  const [orderList, setOrdeList] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  return (
    <OrderDataContext.Provider
      value={{
        orderList,
        setOrdeList,
        orderCount,
        setOrderCount,
      }}
    >
      {children}
    </OrderDataContext.Provider>
  );
}
export const UseOrderContext = () => useContext(OrderDataContext);
