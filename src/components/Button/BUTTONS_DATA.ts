export interface Button {
  id: string;
  number?: string;
  operator?: string;
  classList: string;
}

export const BUTTONS_DATA: Button[] = [
  {
    id: "clear",
    operator: "AC",
    classList: "btn big-row",
  },
  {
    id: "divide",
    operator: "/",
    classList: "btn",
  },
  {
    id: "multiply",
    operator: "x",
    classList: "btn",
  },
  {
    id: "seven",
    number: "7",
    classList: "btn",
  },
  {
    id: "eight",
    number: "8",
    classList: "btn",
  },
  {
    id: "nine",
    number: "9",
    classList: "btn",
  },
  {
    id: "subtract",
    operator: "-",
    classList: "btn",
  },
  {
    id: "four",
    number: "4",
    classList: "btn",
  },
  {
    id: "five",
    number: "5",
    classList: "btn",
  },
  {
    id: "six",
    number: "6",
    classList: "btn",
  },
  {
    id: "add",
    operator: "+",
    classList: "btn",
  },
  {
    id: "one",
    number: "1",
    classList: "btn",
  },
  {
    id: "two",
    number: "2",
    classList: "btn",
  },
  {
    id: "three",
    number: "3",
    classList: "btn",
  },
  {
    id: "equals",
    operator: "=",
    classList: "btn big-column",
  },
  {
    id: "zero",
    number: "0",
    classList: "btn big-row",
  },
  {
    id: "decimal",
    number: ".",
    classList: "btn",
  },
];
