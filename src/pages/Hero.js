import Showcase from '../assets/images/banner.png';
import { NavBar, ProductList } from '../components';

export const Hero = () => {
  return (
    <main>
      <img
        src={Showcase}
        alt="Banner"
        className="self-center w-full mb-5		"
      />
    </main>
  );
};
