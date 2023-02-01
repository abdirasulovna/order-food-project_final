import { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import TotalAmount from "../basket/TotalAmount";
import BasketItem from "./BasketItem";

const Basket = ({ showBasketHandler }) => {
  const { items, updateBasketItem, deleteBasketItem } =
    useContext(BasketContext);

  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };
  const decrementAmount = (id, amount) => {
    if (amount > 1) {
      updateBasketItem({ amount: amount - 1, id: id });
    } else {
      deleteBasketItem(id);
    }
  };
  const incrementAmount = (id, amount) => {
    updateBasketItem({ amount: amount + 1, id: id });
    console.log("asdasd");
  };
  return (
    <Modal showBasketHandler={showBasketHandler}>
      <Content>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item._id}
                  incrementAmount={() => incrementAmount(item._id, item.amount)}
                  decrementAmount={() => decrementAmount(item._id, item.amount)}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FixedHeightContainer>
        ) : null}
        <TotalAmount
          price={getTotalPrice()}
          showBasketHandler={showBasketHandler}
          onOrder={() => {}}
        />
      </Content>
    </Modal>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
