export interface ICurrencyLatest {
  success: boolean;
  error?: IAPIError;
  query: IQuery;
  info: IInfo;
  date: string;
  result: number;
}

export interface IQuery {
  from: string;
  to: string;
  amount: number;
}

export interface IInfo {
  timestamp: number;
  rate: number;
}
export interface IAPIError {
  code: number;
  type: string;
  info: string;
}

export interface ICurrencyType {
  success: boolean;
  symbols: Object;
}
