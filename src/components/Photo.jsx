import { useDispatch, useSelector } from "react-redux";
import { pro, toggle } from "../features/dropDown/dropSlice";

const Photo = () => {

    const dispatch = useDispatch();
    const dispatch2 = useDispatch();
    const select = useSelector((state) => state.Drop.drop);

    const dropping = () => {
        dispatch(pro());
        if(select){
            dispatch2(toggle());
        }
    }

  return (
    <div className="flex justify-between items-center mt-2 cursor-pointer overflow-x-hidden shrink-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="36"
      height="36"
      color="#000000"
      fill="none"
      className="cursor-pointer"
      onClick={dropping}
    >
      <path
        d="M15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9Z"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    </div>
  );
};
export default Photo;
