import { useBear } from "./useCounterStore";

export default function Temp() {
  const bears = useBear((state) => state.bears);
  const increase = useBear((state) => state.increasePopulation);

  return (
    <>
      <h1>{bears} bears around here...</h1>
      <button onClick={increase}>Add Bear</button>
    </>
  );
}