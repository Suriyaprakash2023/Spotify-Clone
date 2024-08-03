import React,{createContext,useContext,useReducer} from "react";

  export const DataLayerContext = createContext();

  export const DataLayer = ({initalState,reducer,children}) => (
    <DataLayerContext.Provider value={useReducer(reducer,initalState)}>
      {children}
    </DataLayerContext.Provider>
  )

  export const useDataLayerValue = () => useContext(DataLayerContext);