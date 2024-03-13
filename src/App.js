import "./index.css";
import logo from "./images/logo.svg";
import Photo from "./components/Photo";
import one from "./images/one.JPG";
import two from "./images/two.JPG";
import three from "./images/three.JPG";
import four from "./images/four.JPG";
import five from "./images/five.JPG";
import { useState } from "react";

function App() {
  let randomZIndex = () => {
    return Math.floor(Math.random() * 5);
  };

  const [imagePosition, setImagePosition] = useState({
    imageOne: "5",
    imageTwo: "2",
    imageThree: "3",
    imageFour: "4",
    imageFive: "1",
  });

  return (
    <div className="App">
      <div className="mainContainer">
        <h3 id="title">
          G <br />x <br />M <br />
        </h3>
        <h3></h3>
        <h3>seoul</h3>
        <h3></h3>
        <div className="photoContainer">
          <Photo
            image={one}
            rotate="20"
            index={imagePosition.imageOne}
            width="300px"
            height="400px"
            top="-80px"
          />
          <Photo
            image={two}
            rotate="-20"
            index={imagePosition.imageTwo}
            width="400px"
            height="450px"
            top="-80px"
          />
          <Photo
            image={three}
            rotate="30"
            index={imagePosition.imageThree}
            width="320px"
            height="450px"
            top="-80px"
          />
          <Photo
            image={four}
            rotate="-30"
            index={imagePosition.imageFour}
            width="250px"
            height="450px"
            top="-80px"
          />
          <Photo
            image={five}
            rotate="50"
            index={imagePosition.imageFive}
            width="450px"
            height="350px"
            top="-80px"
          />
        </div>
        <h3></h3>
        <h3>london</h3>
        <h3></h3>
        {/* <h3>connect</h3> */}
        <img
          id="logo"
          src={logo}
          alt=""
          onClick={() =>
            setImagePosition({
              imageOne: randomZIndex(),
              imageTwo: randomZIndex(),
              imageThree: randomZIndex(),
              imageFour: randomZIndex(),
              imageFive: randomZIndex(),
            })
          }
        />
      </div>
    </div>
  );
}

export default App;
