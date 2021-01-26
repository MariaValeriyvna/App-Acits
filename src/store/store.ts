import { Action, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from "./reducers";
export interface IToday {
  name: string;
  my_type: string;
}

export type RootState ={
  animals: Array<IPropsAnimals>;
  today: Array<IPropsToday>;
};

export interface IPropsToday {
  prescription:string;
  animal:{id:number,name:string, spec_name:string, spec_parent_name:string};
  my_type: string
}
export interface IPropsAnimals {
  id:number,
  name:string, 
  spec_name:string, 
  spec_parent_name:string
}
export const initialState: RootState = {
  animals: [],
  today: [],
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<RootState, Action>)
  )
);
