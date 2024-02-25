// import React from "react";
// import { FaStar } from "react-icons/fa";
// import data from "./cardData";

// export default function Rating({ noOfStars = 5 }) {
//   const [rating, setRating] = React.useState(0);
//   const [hover, setHover] = React.useState(0);

//   return (
//     <div className="container">
//       <div className="card-container">
//         {data.map((item, index) => (
//           <div className="card" key={index}>
//             <img src={item.image} alt={item.title} />
//             <div className="card__details">
//               <span className="tag">${item.price}</span>
//               <div className="name">{item.title}</div>
//               <div className="rating">
//                 {[...Array(noOfStars)].map((_, starIndex) => (
//                   <FaStar
//                     className={
//                       starIndex < (hover || rating) ? "active" : "inactive"
//                     }
//                     key={starIndex}
//                     size={24}
//                     onClick={() => setRating(starIndex + 1)}
//                     onMouseEnter={() => setHover(starIndex + 1)}
//                     onMouseLeave={() => setHover(0)}
//                   />
//                 ))}
//               </div>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Consectetur sodales morbi dignissim sed diam pharetra vitae
//                 ipsum odio.
//               </p>
//               <button>Read more</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { FaStar } from "react-icons/fa";
import data from "./cardData";

export default function Rating({ noOfStars = 5 }) {
  const [ratings, setRatings] = React.useState(Array(data.length).fill(0));
  const [hovers, setHovers] = React.useState(Array(data.length).fill(0));

  const handleRatingChange = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  const handleMouseEnter = (index, hover) => {
    const newHovers = [...hovers];
    newHovers[index] = hover;
    setHovers(newHovers);
  };

  const handleMouseLeave = () => {
    setHovers(Array(data.length).fill(0));
  };

  return (
    <div className="container">
      <div className="card-container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="card__details">
              <span className="tag">${item.price}</span>
              <div className="name">{item.title}</div>
              <div className="rating">
                {[...Array(noOfStars)].map((_, starIndex) => (
                  <FaStar
                    className={
                      starIndex < (hovers[index] || ratings[index])
                        ? "active"
                        : "inactive"
                    }
                    key={starIndex}
                    size={24}
                    onClick={() => handleRatingChange(index, starIndex + 1)}
                    onMouseEnter={() => handleMouseEnter(index, starIndex + 1)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur sodales morbi dignissim sed diam pharetra vitae
                ipsum odio.
              </p>
              <button>Add To Card</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
