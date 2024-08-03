type DataItem = {
  label: string;
  value: number;
  change?: number;
};

type DataList = DataItem[];

type PartitionAlgorithm = "sliced" | "diced" | "squarify" | "binary";

export type { DataItem, DataList, PartitionAlgorithm };
