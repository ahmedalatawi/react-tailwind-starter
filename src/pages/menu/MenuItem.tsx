import { formatCurrency } from "../../utils/helpers";

type Pizza = {
  id: string;
  name: string;
  unitPrice: number;
  ingredients: [];
  soldOut: boolean;
  imageUrl: string;
};

interface Props {
  pizza: Pizza;
}

function MenuItem({ pizza }: Props) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  console.log("id: ", id);

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
