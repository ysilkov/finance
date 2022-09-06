import { io } from "socket.io-client";
const socket = io.connect("http://localhost:4000");

export let changeValue = [];
export let changeColor = [];
const up = "▲ ";
const down = "▼ ";
export const changeValueColor = (data) => {
  if (data.length !== 0) {
    data[data.length - 1].forEach((val) => {
      if (val.change_percent > 0) {
        changeValue.push(up + val.change_percent);
        changeColor.push("green");
      } else {
        changeValue.push(down + val.change_percent);
        changeColor.push("red");
      }
    });
  }
  
};

export const checkTrikerColor = (ticker) => {
  if (ticker === "AAPL") {
    return { "background-color": "red" };
  }
  if (ticker === "GOOGL") {
    return { "background-color": "blue" };
  }
  if (ticker === "MSFT") {
    return { "background-color": "gray" };
  }
  if (ticker === "AMZN") {
    return { "background-color": "gold" };
  }
  if (ticker === "FB") {
    return { "background-color": "greenyellow" };
  }
  if (ticker === "TSLA") {
    return { "background-color": "brown" };
  }
};

export const upDateTimeSocket = (e) => {
  socket.emit("newTime", e);
};
let selectedLi;
export const highLight = (li) => {
  socket.on("timeChange", () => {
    if (selectedLi) {
      selectedLi.style = "color: gray";
    }
    selectedLi = li;
    li.style = "color:black";
  });
};
