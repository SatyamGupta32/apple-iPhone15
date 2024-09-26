import { appleImg } from "../utils";
import { searchImg } from "../utils";
import { bagImg } from "../utils";
import { navLists} from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-3 sm:px-10 px-5 flex justify-center items-center">
      <nav className="flex w-full max-w-[965px]">
        <img src={appleImg} alt="apple" width={14} height={18} />
        <div className="flex flex-1 items-center justify-evenly max-sm:hidden">
          {navLists.map((nav, i) => (
            <div key={i} className=" text-stone-300 hover:text-white transition-all text-[12px] font-normal">
              <a href="#" className="nav-link">
                {nav}
              </a>
            </div>
          ))}
        </div>

        <div className="flex gap-10 items-baseline max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={15} height={15}/>
          <img src={bagImg} alt="search" width={15} height={15}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
