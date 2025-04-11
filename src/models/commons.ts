import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

export type OptionType = { [key: string]: any };
export type OptionsType = Array<OptionType>;

export interface Filters {
  [key: string]: string | number | boolean;
}

export interface DateAt {
  created_at: string;
  deleted_at: string | null;
}

export interface Country extends DateAt {
  id: string;
  name: string;
  code: string;
}

export interface Paginate<T> {
  page_number: number;
  page_size: number;
  total_pages: number;
  total_record: number;
  data?: T[];
}

export interface Pagination {
  pageSize: number | null;
  total: number | null;
  current: number | null;
}

export interface CommonService {
  id: number;
  name: string;
}

export interface List {
  name: string;
  route: string;
  icon: React.ForwardRefExoticComponent<Pick<AntdIconProps, any>>;
  disabled?: boolean;
}

interface Prediction {
  place: string;
  placeId: string;
  text: Text;
}

export interface PlacePrediction {
  placePrediction: Prediction;
}

export interface Place {
  suggestions: PlacePrediction[];
}

export interface DataInstagram {
  media_url: string;
}

export interface Option {
  label: string;
  value: string | number;
}
