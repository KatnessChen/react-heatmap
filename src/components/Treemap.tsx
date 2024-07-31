import { purples } from "../const/color";
import { colorCreatorFn } from "../utils";

const canvas = {
  width: 600,
  height: 400,
};

let remainingArea = canvas.width * canvas.height;

const data = [
  { label: "NVDA", value: 0.4, change: 2 },
  { label: "MSFT", value: 0.2, change: 3.5 },
  { label: "APPL", value: 0.3, change: 3.5 },
  { label: "META", value: 0.05, change: -4 },
  { label: "AMZN", value: 0.05, change: -1 },
];

function Treemap() {
  const bgColor = colorCreatorFn(purples);
  const textColor = colorCreatorFn(purples, 3);
  let accumulatedY = 0;

  const slicedRects = data.map((item, index) => {
    const height = (remainingArea * item.value) / canvas.width;
    accumulatedY += height;
    const rectY = accumulatedY - height;
    const textY = accumulatedY - height / 2;

    return (
      <>
        <rect
          key={index}
          x={0}
          y={rectY}
          width={canvas.width}
          height={height}
          stroke="white"
          strokeWidth="4"
          rx="4"
          ry="4"
          fill={bgColor()}
        />
        <text
          key={index + 100}
          x={canvas.width / 2}
          y={textY}
          fontSize="24"
          fill={textColor()}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {item.label}
        </text>
      </>
    );
  });

  return (
    <div>
      <svg width={canvas.width} height={canvas.height}>
        {slicedRects}
      </svg>
    </div>
  );
}

export default Treemap;
