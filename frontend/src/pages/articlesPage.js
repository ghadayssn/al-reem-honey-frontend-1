import React, { useEffect, useState } from "react";
import { URL } from "./global";
import Articles from "../components/Articles/articles";
import { Route, Switch } from "react-router-dom"; //route is a component
import ArticleView from "./articlesPage/articleView";

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
    if (articles.length == 0) fetchData();
  }, [articles]);

  return (
    <div>
      <Switch>
        <Route exact path="/articles">
          {articles && (
            <Articles title="المقالات" latestArticles={articles} />
          )}
        </Route>
        <Route exact path="/articles/:id">
          <ArticleView></ArticleView>
        </Route>
      </Switch>
    </div>
  );
};
export default ArticlesPage;
