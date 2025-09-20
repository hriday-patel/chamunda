import { useSelector } from "react-redux";

const Navdropper = () => {

  const select = useSelector((state) => state.Drop.drop);


  return (
    <div className={`${select ? "" : "hidden"} absolute top-[60px] right-[30px]`}>
      <nav className="bg-slate-300/90 rounded-2xl">
        <ul className="list-none">
          <li className="border-b p-3 text-center w-full"><a href="#" className="tracking-tight font-bold w-full">About Us</a></li>
          <li className="border-b p-3 text-center w-full"><a href="#" className="tracking-tight font-bold w-full">Contact Us</a></li>
          <li className="border-b p-3 text-center w-full"><a href="#" className="tracking-tight font-bold w-full">Our Products</a></li>
          <li className="p-3 text-center w-full"><a href="#" className="tracking-tight font-bold w-full">Home</a></li>
        </ul>
      </nav>
    </div>
  );
};
export default Navdropper;
