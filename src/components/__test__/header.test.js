import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server"; //this is used instead of createbrowser router dom


test("Logo should loaded and render header", () => {
  const header = render (
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe(
    "https://images-platform.99static.com/7T0wRR0lIM65Zv3GISPCe5j-x4I=/96x96:864x864/500x500/top/smart/99designs-contests-attachments/125/125299/attachment_125299952"
  );
  console.log(logo);
});

test("To check online status", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const online = header.getByTestId("onlineStatus");
  expect(online.innerHTML).toBe(
    "✅"
  );
});

test("CART is empty", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const cart = header.getByTestId("emptyCart");
    expect(cart.innerHTML).toBe(
      "Cart-0"
    );
  });
