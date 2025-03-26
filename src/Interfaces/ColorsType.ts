export interface GetColorsResponse {
  id: string;
  colorName: string;
  colorHex: string;
}

export interface Color {
  id: string;
  colorName: string;
  colorHex: string;
}

export interface SaveColorAction {
  type: string;
  payload: { colorName: string; colorHex: string };
}

export interface ColorsState {
  colors: GetColorsResponse[];
  loading: boolean;
  error?: string;
}
