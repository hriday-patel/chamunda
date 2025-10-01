import { useDispatch, useSelector } from "react-redux";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { toggle } from "../features/dropDown/dropSlice";

const Navdropper = () => {


  const dispatch = useDispatch();
  const select = useSelector((state) => state.Drop.drop);
  const ref = useOutsideClick(() => dispatch(toggle()));


  return (
    <div>

    { select && (<div ref={ref} className={`${select ? "" : "hidden"} absolute top-[60px] right-[30px]`}>
      <nav className="bg-slate-300/90 rounded-2xl">
        <ul className="list-none">
          <li className="border-b p-3 text-center w-full"><a href="#" className="tracking-tight font-bold w-full">About Us</a></li>
          <li className="border-b p-3 text-center w-full"><a href="#" className="tracking-tight font-bold w-full">Contact Us</a></li>
          <li className="border-b p-3 text-center w-full"><a href="#" className="tracking-tight font-bold w-full">Our Products</a></li>
          <li className="p-3 text-center w-full"><a href="#" className="tracking-tight font-bold w-full">Home</a></li>
        </ul>
      </nav>
    </div>)}
    </div>
  );
};
export default Navdropper;
