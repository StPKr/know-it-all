interface Props {
  label: string;
}

export default function NavButton({ label }: Props) {
  return (
    <button className="px-4 py-1 rounded-md bg-white text-blue-600 font-medium hover:bg-blue-100 transition">
      {label}
    </button>
  );
}
