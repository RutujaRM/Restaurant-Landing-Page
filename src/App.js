import "./styles.css";
import "./MyButton"; //here we import file or component
import MyButton from "./MyButton";

export default function App() {
  const btn = () => {
    //here we can write javascript like internal in vennila
    alert("Rutuja You click button Successfully !!"); // and pass this function on button as onclick then alert executes
  };

  return (
    <div className="App">
      <div id="outside_div">
        <div id="inner_div">
          <nav>
            <div className="nav_div">
              Wood<span>Food</span>
            </div>
            <div className="span_div">
              <span>Home </span>
              <span>About Us</span>
              <span>Work</span>
              <span>Contact </span> <span>FAQ</span>
            </div>
          </nav>

          <div className="flex_container">
            <div id="div1">
              <h1>Spring in </h1>
              <h1 id="orange">WoodFood </h1>
              <p>The most delicious outdoor food </p>
              <span>
                <a href="#">
                  {" "}
                  <button onClick={btn}>Capacity</button>
                </a>{" "}
              </span>
              <span>
                <a href="#">
                  {" "}
                  <button onClick={btn}>Location</button>
                </a>{" "}
              </span>
              <span>
                <a href="#">
                  {" "}
                  <button onClick={btn}>Seat type</button>
                </a>{" "}
              </span>
            </div>
            <div id="div2"> </div>
          </div>
          <div className="flex_container2">
            <div>
              <img src="https://img.freepik.com/free-vector/sliced-vegetables-realistic-concept-with-tomato-pepper-onion-vector-illustration_1284-16245.jpg?w=740&t=st=1661679575~exp=1661680175~hmac=e20d6c77df20a8c794fa364381ae145c407d9984dd968a1508e3c023597330df" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search Dishes"
                name="dish"
                id="search"
              />
              <h1 id="blue">Simple way to start eat healthier </h1>
              <p>
                {" "}
                Enjoy dining with Three Kitchens Restaurant and Bar at The
                Ritz-Carlton, Pune, serving Indian, Asian and international fare
                in a charming atmosphere.is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
              <MyButton />{" "}
              {/*This button comes from button.js component which we import */}
            </div>
          </div>

          <div>
            <img
              id="footer_img"
              src="https://img.freepik.com/free-vector/thai-cuisine-food-flat-illustration_1284-74042.jpg?w=740&t=st=1661681536~exp=1661682136~hmac=61ff928c54ae6f6d37487e8f5ba8f36a0ccacec3105af43fd246d490b096e7b3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
