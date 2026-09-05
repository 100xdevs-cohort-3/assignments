import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartTotalSelector } from '../store/cartTotalSelector';
export default function Header() {
  const total = useRecoilValue(cartTotalSelector);
  return (
    <header>
      <Link to="/">
        <strong>Everyday finds.</strong>
      </Link>
      <nav>
        <Link to="/">Wishlist</Link>
        <Link to="/cart">Cart ({total.count})</Link>
      </nav>
    </header>
  );
}
