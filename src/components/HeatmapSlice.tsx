import { purples } from "../const/color";
import { colorCreatorFn } from "../utils";
import HeatmapPropType from "./type";

function HeatmapSlice({ width, height, dataList }: HeatmapPropType) {
  const bgColor = colorCreatorFn(purples);
  const textColor = colorCreatorFn(purples, 3);
  const totalSize = width * height;
  let offset = 0;

  const rects = dataList.map((item, index) => {
    const height = (totalSize * item.value) / width;

    const result = (
      <>
        <rect
          key={`rect-index-${index}`}
          x={0}
          y={offset}
          width={width}
          height={height}
          stroke="white"
          strokeWidth="4"
          rx="4"
          ry="4"
          fill={bgColor()}
        />
        <text
          key={`text-index-${index}`}
          x={width / 2}
          y={offset + height / 2}
          fontSize="24"
          fill={textColor()}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {item.label}
        </text>
      </>
    );

    offset += height;

    return result;
  });

  return rects;
}

export default HeatmapSlice;
