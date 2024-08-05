import { DataList, PartitionAlgorithm, HEX } from "../type";

type HeatmapPropType = {
  width: number;
  height: number;
  dataList: DataList;
  colors: HEX[];
  partitionAlgorithm?: PartitionAlgorithm;
};

export default HeatmapPropType;
