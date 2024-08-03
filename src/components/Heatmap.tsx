import HeatmapPropType from "./type";
import HeatmapSlice from "./HeatmapSlice";
import HeatmapDice from "./HeatmapDice";
import HeatmapBinary from "./HeatmapBinary";

function Heatmap({
  width,
  height,
  dataList,
  partitionAlgorithm,
}: HeatmapPropType) {
  let rects = null;
  if (partitionAlgorithm === "diced") {
    rects = <HeatmapDice width={width} height={height} dataList={dataList} />;
  } else if (partitionAlgorithm === "binary") {
    rects = <HeatmapBinary width={width} height={height} dataList={dataList} />;
  } else {
    rects = <HeatmapSlice width={width} height={height} dataList={dataList} />;
  }

  return (
    <div>
      <svg width={width} height={height}>
        {rects}
      </svg>
    </div>
  );
}

export default Heatmap;
