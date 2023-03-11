import { createSignal } from 'solid-js';

export interface CounterProps {
  initialValue?: number;
  onCounterChange?(count: number): void;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = createSignal(props.initialValue || 0);

  const handleCounterChange = () => {
    setCount(count() + 1);
    props.onCounterChange?.(count());
  };

  return (
    <div class="bg-slate-600 text-slate-300 rounded-md cursor-pointer p-3 w-fit" onClick={handleCounterChange}>
      Clicks: {count()}
    </div>
  );
}
