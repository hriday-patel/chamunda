import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pro, toggle } from "../features/dropDown/dropSlice";

const Button = () => {
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const select = useSelector((state) => state.Drop.drop);
  const select2 = useSelector((state) => state.Drop.profile);
  const dropping = () => {
    dispatch(toggle());
    if(select2){
      dispatch2(pro());
    }
  };

  return (
    <button
      className="flex justify-center items-center bg-transparent outline-none border-0 cursor-pointer relative w-[42px] h-[42px] mt-2 md:hidden"
      onClick={dropping}
    >
      <div
        className={`${
          !select
            ? 'w-[34px] h-[5px] bg-black rounded-md absolute before:content-[""] after:content-[""] before:translate-y-[10px] after:-translate-y-[10px]'
            : 'before:content-[""] after:content-[""] before:rotate-45 after:-rotate-45'
        } before:w-[34px] before:h-[5px] before:bg-black before:rounded-md before:absolute before:-translate-x-[17px] after:w-[34px] after:h-[5px] after:bg-black after:rounded-md after:absolute after:-translate-x-[17px] before:transition-all before:duration-300 before:linear after:transition-all after:duration-300 after:linear`}
      ></div>
    </button>
  );
};
export default Button;
