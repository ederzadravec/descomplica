export interface ITableGridConfig {
  schema: string;
  size: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  props: (schema: string) => { [field: string]: any };
  type?: any;
  hide?: () => boolean;
}
