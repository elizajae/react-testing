import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";



it("renders without crashing", function() {
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
})

it("matches snapshot", function() {
  const {asFragment} = render(<Carousel photos= {TEST_IMAGES} title="images for testing" />);
  expect(asFragment()).toMatchSnapshot();
});


it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const {container} = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  ); 
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  
  fireEvent.click(leftArrow);

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  
  // How can we move to the second image?
  // Check to see if we are at the second image
  // How can we move back to the first image?
  // Check to see if we are at the first image
})
