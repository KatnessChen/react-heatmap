import HeatmapPropType from "./type";
import HeatmapSlice from "./HeatmapSlice";
import HeatmapDice from "./HeatmapDice";
import HeatmapBinary from "./HeatmapBinary";
import { blues } from "../const/color";

function Heatmap({
  width,
  height,
  dataList,
  partitionAlgorithm,
  colors = blues,
}: HeatmapPropType) {
  let rects = null;
  if (partitionAlgorithm === "diced") {
    rects = (
      <HeatmapDice
        width={width}
        height={height}
        dataList={dataList}
        colors={colors}
      />
    );
  } else if (partitionAlgorithm === "binary") {
    rects = (
      <HeatmapBinary
        width={width}
        height={height}
        dataList={dataList}
        colors={colors}
      />
    );
  } else {
    rects = (
      <HeatmapSlice
        width={width}
        height={height}
        dataList={dataList}
        colors={colors}
      />
    );
  }

  return rects;
}

export default Heatmap;
