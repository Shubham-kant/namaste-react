import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
//importing Header component so we can use it in this file
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
//`createBrowserRouter is `router to create react configuration and `RouterProvider` to pass config to app
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'; 
import RestaurantPage from "./components/RestaurantPage";
import RestaurantCard from "./components/RestaurantCard";
//BASICS PRACTICE START
/*
//why 2 files - why not different file.
//because react also works on mobile.have u heard of react native.There are different places where react is used.
const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "hello from nested divs 1"),
    React.createElement("h1", {}, "hello from nested divs 2"),
  ])
);
const heading = React.createElement(
  "h1",
  {
    id: "head",
    className: "fef",
    tabIndex: "fef",
  },
  "hello hi namastey"
);

console.log("react heading::", heading);
console.log(React, ReactDOM);
//JSX => Babel converts to  React.createElement() => React element (JS object )=> HTML Element (rendered)
const jsx = (
  <h1 className="dwsd" tabIndex="fef">
    hello hi namastey
  </h1>
);
console.log("jsx elememnt", jsx);
const number = 1000;
//react element i.e. JS object . can be used in {} as JS piece of code in JSX
const footer = <span>footer</span>;
//react element
console.log(footer);
//functional component
const Title = () => <h1>hello title is here..</h1>;
const ReactElem1 = <span>react element element 1 </span>;
// console.log(jsx === heading);
//REACT functional component - JS function returning JSX/React element is functional component.
//component component - using 1 component in another component.
const HeadingComponent = () => (
  <div>
    <Title />
    // we can use piece of JS in JSX inside {}.
    {footer}
    <h1>hello functional component</h1>
  </div>
);
console.log("func::", HeadingComponent());

const HeadingComponent2 = () => {
  console.log(<HeadingComponent />);
  console.log(<h1>frg</h1>);
  return <HeadingComponent />;
  // React.createElement('h1',{
  //     id:'head',
  //     className:'fef',
  //     tabIndex:"fef"
  // },'hello hi namastey');
};
//react element (tags) are objects
console.log(parent);
const ReactElem2 = (
  <div>
    {ReactElem1}
    //also print functional component inside {} bcoz func comp are JS function only
    {Title()}
    <Title />
    <Title></Title>
    <p>react elememnt 2</p>
    <HeadingComponent />
  </div>
);
const ReactElem3 = (
    // react fragment - act as empty tag .return multiple elements without adding extra node
  <>
    <div></div>
    <div></div>
  </>
);
// Assignment EP-03 starts
const Logo = () => {
  return (
    <img
      src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/38.png"
      height={"50px"}
      width={"50px"}
    />
  );
};
const SearchBar = () => {
  return <input type="text" />;
};
const UserProfile = () => {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHxR3IZcDutYvMXCKkWH6XJdDd3fDiD_ZGz1gRlBw5cXLgMyseBZVU6eySuKiZKRQF2A&usqp=CAU"
      height={"50px"}
      width={"50px"}
    />
  );
};
const Header = () => (
  <div className="header-container">
    <Logo />
    <SearchBar />
    <UserProfile />
  </div>
);
// Assignment EP-03 ends
//render method converts react object (here parent) into html element that browser understands.
// React create element creates JS object
*/
// BASICS PRACTICE END

//applayout
const AppLayout = () => {
    return <div className="app">
        <Header />
        <Outlet />
    </div>
}

// lazy loading/chunking/dynamic import/dynamic loading/code splitting/on demand loading

//loading about component using Lazy loading.
const About = lazy(() => import('./components/About'))


//react configuration
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children:[
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element:
         //about is child of applayout here
         //loaded via lazy loading
        <Suspense fallback={<h1>Loading...</h1>}>
          <About /> 
        </Suspense>

      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurant-page/:resId',
        element: <RestaurantPage />
      }
    ],
    //for any route that is not in our config,below page will be rendered 
    errorElement: <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//RouterProvider provides routing config to app.
root.render(<RouterProvider router={appRouter} />);