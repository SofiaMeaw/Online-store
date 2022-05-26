import './App.css';
import Product from "./Components/Product";

function App() {
  return (
    <div className="App">
      <header class="header">
        <div class="header-img"/>
        <menu>
          <a class="home" href="/">Home</a>
          <a class="cart" href="/">
            <img src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"/>
          </a>
          <a class="user" href="/">
            <img src="https://static.thenounproject.com/png/1367727-200.png"/>
          </a>
        </menu>
      </header>

      <main>
        <div className="product-carrousel">
          <Product
            link="#"
            title="Red hood"
            img="https://user-images.githubusercontent.com/98921057/170389319-5aeb4431-53e3-479a-9be5-0f28923915a8.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Product
            link="#"
            title="Black Dress"
            img="https://user-images.githubusercontent.com/98921057/170389320-2bb535e1-16ea-4e24-951c-66ff32a4a54e.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Product
            link="#"
            title="Mask"
            img="https://user-images.githubusercontent.com/98921057/170389321-bda21c4f-30f7-4205-9e3f-b2d0d527e8e2.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Product
            link="#"
            title="Vest 1"
            img="https://user-images.githubusercontent.com/98921057/170389331-c90845f8-73a4-4dc5-8d77-9a17a8b41be8.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Product
            link="#"
            title="Vest 2"
            img="https://user-images.githubusercontent.com/98921057/170389334-99a4258d-f2a8-447f-af36-b577deb269ae.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
