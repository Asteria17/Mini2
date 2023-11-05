import Showcase from '../assets/images/banner.png';
import { NavBar, ProductList } from '../components';
export const Hero = () => {
  return (
    <main>
      <img
        src={Showcase}
        alt=""
        className="self-center w-full		"
      />{' '}
      <ProductList />
      <NavBar />
    </main>
  );
};
