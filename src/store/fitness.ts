import { create } from "zustand";
interface FitnessStore {
  newTipForm: number;
  setNewTipForm: (val: number) => void;
}

const useFitnessStore = create<FitnessStore>((set) => ({
  newTipForm: 0,
  setNewTipForm: (val: number) => set(() => ({ newTipForm: val })),
}));

export default useFitnessStore;
