import React from "react";
import Grid from "@material-ui/core/Grid";
import { URL } from "../../pages/global";
import { Link } from "react-router-dom";
import "./articles.css";
export default function Articles(props) {
  const latestArticles = props.latestArticles;
  return (
    <div className="article-container">  
      <h1 className="section-title"> {props.title}</h1>
      <Grid container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        {latestArticles &&
          latestArticles.map((latest, index) => {
            return (
              <Grid item xs={12} sm={6} lg={4} style={{ padding: "10px" }}>
                <Link to={"/articles/" + latest._id}>
                  <Grid
                    container
                    style={{
                      boxShadow: "0px 0px 8px 0px",
                      borderRadius: "4px",
                    }}
                  >
                    <Grid item xs={12}>
                      <img
                        className="slider-img"
                        src={`${URL}/articleImages/${latest.image}`}
                        alt="Bees/honey"
                      />
                    </Grid>
                    <Grid item xs={12} style={{ padding: "0px 40px" }}>
                      <div>
                        {/* مجدرة وعسل لها فوائد عديدة لكنني لا أعرفها. كان جدي يحبها كثيرا.
                وأنا منذ صغري اعتدت عليها لأجل جدي. احب جدي كثيرا فعمره يناهز
                ال٩٠ ولا زال يتمتع بحس فكاهي مميز وصحته جيدة جدا. */}
                        <h4>{latest.title}</h4>
                        <p
                          style={{ fontWeight: "bold" }}
                          // className="article-desc"
                        >
                          {latest.description.substr(0, 70)}{"..."}
                        </p>
                        <p> {latest.author} </p>
                      </div>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            );
          })}

        {/* <Grid item xs={4} style={{ padding: "10px" }}>
          <Grid
            container
            style={{ boxShadow: "0px 0px 8px 0px", borderRadius: "4px" }}
          >
            <Grid item xs={12}>
              <img
                className="slider-img"
                src="https://picsum.photos/800/300/?random"
                alt="1"
              />
            </Grid>
            <Grid xs={12} style={{ padding: "0px 40px" }}>
              <div>
                مجدرة وعسل لها فوائد عديدة لكنني لا أعرفها. كان جدي يحبها كثيرا.
                وأنا منذ صغري اعتدت عليها لأجل جدي. احب جدي كثيرا فعمره يناهز
                ال٩٠ ولا زال يتمتع بحس فكاهي مميز وصحته جيدة جدا.
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} style={{ padding: "10px" }}>
          <Grid
            container
            style={{ boxShadow: "0px 0px 8px 0px", borderRadius: "4px" }}
          >
            <Grid item xs={12}>
              <img
                className="slider-img"
                src="https://picsum.photos/800/300/?random"
                alt="1"
              />
            </Grid>
            <Grid xs={12} style={{ padding: "0px 40px" }}>
              <div>
                مجدرة وعسل لها فوائد عديدة لكنني لا أعرفها. كان جدي يحبها كثيرا.
                وأنا منذ صغري اعتدت عليها لأجل جدي. احب جدي كثيرا فعمره يناهز
                ال٩٠ ولا زال يتمتع بحس فكاهي مميز وصحته جيدة جدا.
              </div>
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
    </div>
  );
}
