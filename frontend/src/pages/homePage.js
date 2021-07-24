import Carousel from "../components/Carousel/carousel";
import BestSeller from "../components/BestSeller/bestSeller";
import FullWidthImage from "../components/FullWidthImage/image";
import Articles from "../components/Articles/articles";
import { useState, useEffect } from "react";

import { URL } from "./global";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);
  const [fullWidthImage, setFullWidthImage] = useState("");
  const [latestArticles, setLatestArticles] = useState([]);

  const fetchData = () => {
    return fetch(`${URL}/getHomePageData`)
      .then((res) => {
        if (res.ok) {
          // console.log("ok");
          return res.json();
        }
      })
      .then((jsonRes) => {
        if (jsonRes && jsonRes.data) {
          setData(jsonRes.data);
          setCarouselImages(jsonRes.data.carImages);
          setBestSeller(jsonRes.data.products);
          if (
            jsonRes.data.fullWidImage &&
            jsonRes.data.fullWidImage.length > 0
          ) {
            setFullWidthImage(jsonRes.data.fullWidImage[0].image);
          }
          setLatestArticles(jsonRes.data.latestThreeArticles);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
    console.log("data", data);
  });
  return (
    <div className="HomePage">
      <div className="container">
      <Carousel images={carouselImages} />
      </div>
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
      {fullWidthImage && <FullWidthImage image={fullWidthImage} />}

      {latestArticles && <Articles title="أحدث المقالات" latestArticles={latestArticles} />}
    </div>
  );
};

export default HomePage;
