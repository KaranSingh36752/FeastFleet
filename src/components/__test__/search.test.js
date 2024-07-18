import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { json } from "react-router-dom";
import MOCK_DATA from "../../mocks/MockData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("the shimmer is loading", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // await waitFor(() => expect(body.getByTestId("search-btn")))

  const shimmer = body.getByTestId("Shimmer");
  expect(shimmer.children.length).toBe(20);
});

test("The search is working", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(20);
});

test("The search is working", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, { target: { value: "burger" } });

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(2);
});
