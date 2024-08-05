// import { purples } from "../const/color";
import { colorCreatorFn } from "../utils";
import HeatmapPropType from "./type";

function HeatmapBinary({ width, height, dataList, colors }: HeatmapPropType) {
  const bgColor = colorCreatorFn(colors);
  const textColor = colorCreatorFn(colors, 3);

  const totalSize = width * height;
  const remaining = [width, height]; // remaining of width, remaining of height
  const offsets = [0, 0]; // offset of x, offset of y

  const rects = dataList.map((item, index) => {
    const quantitative = remaining[(index + 1) % 2];
    const variable = (totalSize * item.value) / quantitative;

    const result = (
      <>
        <rect
          key={`rect-index-${index}`}
          x={offsets[0]}
          y={offsets[1]}
          width={index % 2 === 0 ? variable : quantitative}
          height={index % 2 === 1 ? variable : quantitative}
          stroke="white"
          strokeWidth="4"
          rx="4"
          ry="4"
          fill={bgColor()}
        />
        <text
          key={`text-index-${index}`}
          x={offsets[0] + 50}
          y={offsets[1] + 30}
          fontSize="24"
          fill={textColor()}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {item.label}
        </text>
      </>
    );

    remaining[index % 2] -= variable;
    offsets[index % 2] += variable;

    return result;
  });

  return (
    <svg width={width} height={height}>
      {rects}
    </svg>
  );
}

export default HeatmapBinary;
