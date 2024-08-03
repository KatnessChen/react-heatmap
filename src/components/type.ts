import { DataList, PartitionAlgorithm } from "../type";

type HeatmapPropType = {
  width: number;
  height: number;
  dataList: DataList;
  partitionAlgorithm?: PartitionAlgorithm;
};

export default HeatmapPropType;
