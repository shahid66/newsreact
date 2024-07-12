import React from "react";
import BigImg from "../../assets/thumb_lg.png";
import SmallImg from "../../assets/thumb.png";
import NewsDetails from "./NewsDetails";
import NewsItem from "./NewsItem";
import RightColumn from "./RightColumn";

const Home = () => {
  const item = [1, 2, 3, 4, 5];
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
          <div className="col-span-12 grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4">
              <NewsDetails />
            </div>

            <div className="col-span-12 lg:col-span-8">
              <img className="w-full" src={BigImg} alt="thumb" />
              <p className="mt-5 text-base text-[#5C5955]">
                Illustration: Karolis Strautniekas
              </p>
            </div>
          </div>
          {/* <!-- news item ends -->
                    <!-- news item --> */}
          <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
            <div className="col-span-12 md:col-span-6">
              <NewsDetails />
            </div>

            <div className="col-span-12 md:col-span-6">
              <img className="w-full" src={SmallImg} alt="thumb" />
            </div>
          </div>
          {/* <!-- news item ends -->
                    <!-- news item --> */}
          {item.map((i) => (
            <NewsItem key={i} />
          ))}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="col-span-12 md:col-span-4">
              <NewsDetails />
            </div>
          </div>
        </div>
        {/* <!-- right --> */}
        <RightColumn />
      </div>
    </main>
  );
};

export default Home;
