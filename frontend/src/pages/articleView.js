import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL } from "./global";

const ArticleView = (props) => {
  let { id } = useParams();
  const [article, setArticle] = useState(undefined);

  const fetchDataById = (Id) => {
    return fetch(`${URL}/article/getAllArticleById?_id=` + Id)
      .then((res) => {
        if (res.ok) {
          // console.log("ok");
          return res.json();
        }
      })
      .then((jsonRes) => {
        if (jsonRes && jsonRes.data && jsonRes.data.length > 0) {
          setArticle(jsonRes.data[0]);
        //   console.log("Article", jsonRes, article);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    console.log(id);
    if (!article) fetchDataById(id);
  });
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {article && (
          <img
            style={{ width: "60%" }}
            className="article-img"
            src={`${URL}/articleImages/${article.image}`}
            alt="Bees/honey"
          />
        )}
      </div>
      <div>{article && <h2>{article.title}</h2>}</div>
      <div>{article && <h3>{article.author}</h3>}</div>
      <div>{article && <p>{article.description}</p>}</div>
      <div>
        {article && <p>{new Date(article.createdAt).toLocaleDateString()}</p>}
      </div>
    </div>
  );
};

export default ArticleView;
