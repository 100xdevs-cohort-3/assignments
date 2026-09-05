import { RecoilRoot } from 'recoil';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import WishList from './components/WishList';
import AmazonStyleCart from './components/AmazonStyleCart';
export default function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<WishList />} />
            <Route path="/cart" element={<AmazonStyleCart />} />
            <Route
              path="*"
              element={
                <p>
                  Page not found. <Link to="/">Return to wishlist</Link>
                </p>
              }
            />
          </Routes>
        </main>
      </HashRouter>
    </RecoilRoot>
  );
}
