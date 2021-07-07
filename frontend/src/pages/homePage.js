import Carousel from "../components/Carousel/carousel";
import BestSeller from "../components/bestSeller/bestSeller";

function HomePage() {
  const desc = `المجدرة وعسل لها فوائد عديدة لكنني لا أعرفها.
   كان جدي يحبها كثيرا. وأنا منذ صغري اعتدت عليها لأجل جدي.
   احب جدي كثيرا فعمره يناهز ال٩٠ ولا زال يتمتع بحس فكاهي مميز وصحته جيدة جدا.`;

  const title = "مجدرة وعسل";
  const data = [
    {
      title: title,
      desc: desc,
    },
    {
      title: title,
      desc: desc,
    },
    {
      title: title,
      desc: desc,
    },
  ];

  return (
    <div className="HomePage">
      <Carousel />
      {data.map((item, index) => {
        console.log(index);
        return (
          <BestSeller
            name={item.title}
            desc={item.desc}
            pos={index % 2 === 0}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
