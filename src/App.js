import React from "react";
import "./App.css";
import logo from "./images/luna-geek.png";
import butterfly from "./images/butterfly.png";
import switch1 from "./images/switch1.png";
import holographic from "./images/holographic.png";
import wp from "./images/wp.png";
import fairy1 from "./images/fairy1.png";
import queenjs from "./images/queenjs.png";
import css from "./images/css.png";
import dev from "./images/dev.png";

let images = [butterfly, switch1, holographic, wp, fairy1, queenjs, css, dev];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleClick = (e) => {
    this.setState({ x: e.pageX, y: e.pageY });
    function addSticker(x, y) {
      const img = document.createElement("img");
      img.setAttribute(
        "src",
        images[Math.floor(Math.random() * images.length)]
      );
      img.style.left = x + "px";
      img.style.top = y + "px";
      img.style.transform = `translate(0%, -10%) scale(0.5) rotate(${
        Math.random() * 20 - 10
      }deg) `;
      document.querySelector("header").appendChild(img);
    }
    addSticker(e.pageX, e.pageY);
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <header>
          <div>
            <img className="logo" src={logo} alt="logo"></img>
          </div>
        </header>
        <footer>
          <p>
            Coming soon! Until then please enjoy some virtual stickers. Just
            click or tap on your screen and random stickers will pop up. Have
            fun!
          </p>
          <button onClick={() => window.location.reload(false)}>
            Clear the screen
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
