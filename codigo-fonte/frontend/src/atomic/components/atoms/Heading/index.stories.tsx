import { Heading } from "./index";

export default {
  title: "Atoms/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    level: "1",
    align: "center",
    color: "wenge",
    children: "Title example",
  },
  argTypes: {
    level: {
      control: { type: "select" },
      options: ["1", "2", "3", "4", "5", "6"],
    },
    align: {
      control: { type: "select" },
      options: ["right", "center", "left"],
    },
    color: {
      control: { type: "select" },
      options: [
        "wenge",
        "rose-taupe",
        "lavender-web",
        "light-blue",
        "dark-gray",
        "light-gray",
        "white",
        "seashell",
        "desert-sand",
      ],
    },
  },
};

export const Default = {};
