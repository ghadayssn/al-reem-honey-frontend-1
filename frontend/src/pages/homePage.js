import Carousel from "../components/Carousel/carousel";
import BestSeller from "../components/BestSeller/bestSeller";
import Image from "../components/FullWidthImage/image";
import LatestArticles from "../components/LatestArticles/latestArticles";
import { useState, useEffect } from "react";

import { URL } from "./global"

const HomePage = () => {
  const [data, setData] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);

  const fetchData = () => {
    return fetch(`${URL}/getHomePageData`)
      .then((res) => {
        if (res.ok) {
          // console.log("ok");
          return res.json();
        }
      })
      .then((jsonRes) => {
        setData(jsonRes.data);
        setCarouselImages(jsonRes.data.images);
        setBestSeller(jsonRes.data.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
    console.log("test");
    console.log("data", data);
  }, []);
  return (
    <div className="HomePage">
      <Carousel images={carouselImages} />
      {bestSeller &&
        bestSeller.map((best, index) => {
          return (
            <BestSeller
              key={index}
              name={best.title}
              desc={best.description}
              pos={index % 2 === 0}
              urlImage={best.image}
            />
          );
        })}
      <Image />
      <LatestArticles />
    </div>
  );
};

export default HomePage;
