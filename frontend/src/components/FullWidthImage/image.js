import React from "react";
import "./image.css";
import { URL } from "../../pages/global";


// export default function Image() {
//   return (
//     <div>
//       <img
//         className="image"
//         src="https://picsum.photos/800/303/?random"
//         alt="random image"
//       />
//     </div>
//   );
// }

const FullWidthImage = (props) => {
  // const singleImage = props.singleImage;
  return (
    <div>
      <img
        className="image"
        src={`${URL}/fullWidthImage/${props.image}`}
        alt="Honey bee"
      />
    </div>
  );
};

export default FullWidthImage;