import React from "react";
import NewsDetails from "./NewsDetails";
import SmallImg from "../../assets/thumb.png";

const RightColumn = () => {
  const item2 = [1, 2, 3, 4];
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {/* <!-- news item --> */}
        <div className="col-span-12 mb-6 md:col-span-8">
          <img className="w-full" src={SmallImg} alt="thumb" />
          {/* <!-- info --> */}
          <div className="col-span-12 mt-6 md:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                Why is Uber selling its autonomous-vehicle division?
              </h3>
            </a>
            <p className="text-base text-[#292219]">
              Self-driving cars were meant to be its future
            </p>
            <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
          </div>
        </div>
        {/* <!-- news item ends -->
                        <!-- news item --> */}
        {item2.map((i) => (
          <div key={i} className="col-span-12 md:col-span-8">
            {/* <!-- info --> */}
            <div className="col-span-12 md:col-span-4">
              <NewsDetails />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightColumn;
