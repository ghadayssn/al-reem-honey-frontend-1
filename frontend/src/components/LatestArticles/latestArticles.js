import React from "react";
import Grid from "@material-ui/core/Grid";
import { URL } from "../../pages/global";


export default function LatestArticles(props) {
  return (
    <div>
      <h1 className="section-title"> أحدث المقالات</h1>
      <Grid container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <Grid item xs={4} style={{ padding: "10px" }}>
          <Grid
            container
            style={{ boxShadow: "0px 0px 8px 0px", borderRadius: "4px" }}
          >
            <Grid item xs={12}>
              <img
                className="slider-img"
                src={`${URL}/articleImages/${props.urlImagee}`}
                alt="Bees/honey"
              />
            </Grid>
            <Grid xs={12} style={{ padding: "0px 40px" }}>
              <div>
                {/* مجدرة وعسل لها فوائد عديدة لكنني لا أعرفها. كان جدي يحبها كثيرا.
                وأنا منذ صغري اعتدت عليها لأجل جدي. احب جدي كثيرا فعمره يناهز
                ال٩٠ ولا زال يتمتع بحس فكاهي مميز وصحته جيدة جدا. */}
                  <h4>{props.title}</h4>
                  <p style={{fontWeight: "bold"}}>{props.body} </p>
                  <p> {props.author} </p>
              </div>
            </Grid>
          </Grid>
        </Grid>
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
