import { TypedUseSelectorHook, useDispatch as useDispatchBase, useSelector as useSelectorBase } from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useDispatch = () => useDispatchBase<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorBase;
