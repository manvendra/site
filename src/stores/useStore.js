import create from "zustand";
import photosStore from "./photosStore";
import postsSlice from './postsStore';

const useStore = create((set) => ({
    ...postsSlice(set),
    ...photosStore(set)
  }));
  
export default useStore;