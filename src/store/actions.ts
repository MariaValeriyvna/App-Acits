import { ActionCreator, AnyAction } from "redux";

export const UPDATE_ANIMALS = "UPDATE_ANIMALS";
export const UPDATE_TODAY = "UPDATE_TODAY";

export const updateAnimals: ActionCreator<AnyAction> = (animals) => ({
  type: UPDATE_ANIMALS,
  animals,
});
export const updateToday: ActionCreator<AnyAction> = (today) => ({
  type: UPDATE_TODAY,
  today,
});
