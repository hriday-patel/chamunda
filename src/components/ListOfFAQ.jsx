import { useState } from "react";

const ListOfFAQ = () => {

    const [readMore, setReadMore] = useState(false);

  return (
    <li className="bg-slate-100 text-black border border-gray-800/5 drop-shadow-slate-800 hover:drop-shadow-sm xl:w-[800px] lg:w-[700px] md:w-[600px] sm:w-[500px] w-[300px] rounded-md shrink">
      <div className="md:px-4 md:py-6 px-2 py-3 cursor-pointer flex flex-col gap-[25px] flex-wrap" onClick={() => setReadMore(!readMore)}>
        <div className="flex justify-between gap-[10px] flex-wrap shrink">
          <h3 className="font-semibold tracking-tight text-xl shrink">
            What are some doubts?
          </h3>
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="18"
            height="18"
            viewBox="0 0 30.727 30.727"
            xml:space="preserve"
            className={`mt-2 ${readMore ? 'rotate-180' : ""} transition-transform duration-300 linear`}
          >
            <g>
              <path
                d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
		l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"
              />
            </g>
          </svg>
        </div>
        <p className={`${readMore ? "" : "hidden"} leading-normal text-base text-slate-500 shrink`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ipsa fuga ea expedita iusto minus deleniti illum voluptate eligendi!
          Cupiditate, quas ipsum laudantium quidem eligendi distinctio officiis
          iusto deserunt recusandae illum numquam neque nemo omnis!
        </p>
      </div>
    </li>
  );
};
export default ListOfFAQ;
