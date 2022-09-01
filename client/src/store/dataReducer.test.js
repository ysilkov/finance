const {
  addData,
  addFavoriteTickers,
  upDate,
  tickersError,
} = require("./dataReducer");

let state = {
  tickers: [],
  favoriteTickers: [],
  tickersError: "",
  newTime: "",
};

describe("testing reducers", () => {
  it("add new trikers", () => {
    let action = "Hello";

    addData(state.tickers.push(action));
    expect(state.tickers.length).toBe(1);
  });
  it("add new favoriteTickers", () => {
    let action = "Hello";

    addFavoriteTickers(state.favoriteTickers.push(action));
    expect(state.favoriteTickers.length).toBe(1);
  });
  it("add upDate favoriteTickers", () => {
    let action = ["Hello"];

    upDate((state.favoriteTickers = action));
    expect(state.favoriteTickers.length).toBe(1);
  });
  it("add tickersError", () => {
    let action = "Error";

    tickersError((state.tickersError = action));
    expect(state.tickersError).toBe("Error");
  });
});
