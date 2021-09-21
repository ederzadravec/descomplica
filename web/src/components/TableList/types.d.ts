export interface TableListConfigItem {
  size: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  label: string;
  dataPath: string | ((row: any) => string | null);
}

export type TableListItemOnSelect = (row: any) => void;
