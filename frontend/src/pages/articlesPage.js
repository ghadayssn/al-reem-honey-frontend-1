import React, { useEffect, useState } from "react";
import { URL } from "./global";
import LatestArticles from "../components/LatestArticles/latestArticles";

const ArticlesPage = (props) => {

  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    return fetch(`${URL}/article/getAllArticles`)
      .then((res) => {
        if (res.ok) {
          // console.log("ok");
          return res.json();
        }
      })
      .then((jsonRes) => {
        if (jsonRes && jsonRes.data && jsonRes.data.length > 0) {
          setArticles(jsonRes.data);
          console.log("data", jsonRes);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, [articles]);
  return (
    <div>
      {articles && (
        <LatestArticles title="المقالات" latestArticles={articles} />
      )}
    </div>
  );
};
export default ArticlesPage;
