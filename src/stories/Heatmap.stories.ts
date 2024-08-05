import type { Meta, StoryObj } from "@storybook/react";
import Heatmap from "../components/Heatmap";
import { reds } from "../const/color";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Heatmap",
  component: Heatmap,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Heatmap>;

export default meta;
type Story = StoryObj<typeof meta>;

const width = 600;
const height = 400;
const dataList = [
  { label: "A", value: 0.4, change: 3 },
  { label: "B", value: 0.3, change: 3 },
  { label: "C", value: 0.15, change: 3 },
  { label: "D", value: 0.15, change: -4 },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SliceAlgorithm: Story = {
  args: {
    width,
    height,
    dataList,
    colors: reds,
  },
};

export const DiceAlgorithm: Story = {
  args: {
    width,
    height,
    dataList,
    partitionAlgorithm: "diced",
    colors: reds,
  },
};

export const BinaryAlgorithm: Story = {
  args: {
    width,
    height,
    dataList,
    partitionAlgorithm: "binary",
    colors: reds,
  },
};
