import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import Card from "./Card.js";



it("renders without crashing", function() {
    render(<Card/>);
  })
  
  it("matches snapshot", function() {
    const {asFragment} = render(<Card/>);
    expect(asFragment()).toMatchSnapshot();
  });



  