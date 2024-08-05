type DataItem = {
  label: string;
  value: number;
  change?: number;
};

type DataList = DataItem[];

type PartitionAlgorithm = "sliced" | "diced" | "squarify" | "binary";

type HEX = `#${string}`;

export type { DataItem, DataList, PartitionAlgorithm, HEX };
