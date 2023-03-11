import { createSignal } from "solid-js";

export interface CounterProps {
  initialValue?: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = createSignal(props.initialValue || 0);
  return (
    <div class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </div>
  );
}
