interface AppFormShowProps {
  name: string;
  label?: string;
  /**
   * @param {string} value returns the selected value
   * @param {any} form returns the entire form values
   */
  show?: (value: string | string[], form: any) => boolean;
  [key: string]: any;
}
export interface AppSelectProps extends AppFormShowProps {
  options: string[] | string[][] | number[];
  defaultValue?: string;
}
export interface AppSegmentProps extends AppFormShowProps {
  segments: { label: string; value: any }[];
  defaultValue?: any;
  onSegmentChange?: (e) => void;
}
export interface AppColorPickerPorps extends AppFormShowProps {
  presetColors?: {
    enabled: false;
    colors: { h: number; s: number; l: number }[];
  };
}
export interface AppToggleProps extends AppFormShowProps {}
export interface AppInputProps extends AppFormShowProps {
  placeholder?: string;
}
export interface AppRangeProps extends AppFormShowProps {
  min: number; // minimum value
  max: number; // maximum value
  step: number; // step size
  snaps: boolean;
  ticks: boolean;
}
