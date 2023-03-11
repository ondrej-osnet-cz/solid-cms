import { createSignal } from "solid-js";

export interface CounterProps {
  initialValue?: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = createSignal(props.initialValue || 0);
  return (
    <div class="bg-slate-600 text-slate-300 rounded-md cursor-pointer p-3 w-fit" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </div>
  );
}
