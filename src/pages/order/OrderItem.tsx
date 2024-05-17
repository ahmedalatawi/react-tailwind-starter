import { formatCurrency } from '../../utils/helpers';

interface Props {
  item: any;
  isLoadingIngredients: boolean;
  ingredients: [];
}

function OrderItem({ item, isLoadingIngredients, ingredients }: Props) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
