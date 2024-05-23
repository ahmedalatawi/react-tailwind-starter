import { formatCurrency } from "../../utils/helpers";

type Item = {
  totalPrice: number;
  quantity: number;
  name: string;
  pizzaId: string;
};

interface Props {
  item: Item;
}

function CartItem({ item }: Props) {
  const { pizzaId, name, quantity, totalPrice } = item;

  console.log("pizzaId: ", pizzaId);

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
