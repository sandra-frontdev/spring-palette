export interface ActionType<PayloadType = undefined> {
  type: string;
  payload?: PayloadType;
}
