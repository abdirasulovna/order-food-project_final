import { useState } from "react";
import styled from "styled-components";
import Basket from "./components/basket/Basket";
import {Header} from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { Summary } from "./components/summary/Summary";
import { BasketProvider } from "./store/BasketContext";

function App() {
  const [isBasketVisible, setIsBasketVisible] = useState(false)
  
  const showBasketHandler = () => {
  setIsBasketVisible((prevState)=> !prevState)
}

  return (
    <BasketProvider>
      <div>
        <Header onShowBasket={showBasketHandler} />
        <Content>
          <Summary />
          <Meals />
          {isBasketVisible && <Basket showBasketHandler={showBasketHandler} />}
        </Content>
      </div>
    </BasketProvider>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;

// GET /foods
// Headers: { UserID: "your_name"  }

// GET /basket
// Headers: { UserID: "your_name"  }

// POST /foods/:foodId/addToBasket
// BODY: { amount: number }

// Headers: { UserID: "your_name"  }

// DELETE /basketItem/:id/delete
// Headers: { UserID: "your_name"  }

// PUT /basketItem/:id/update
// BODY: { amount: number }

// Headers: { UserID: "your_name"  }
