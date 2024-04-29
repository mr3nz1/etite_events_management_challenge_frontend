interface Props {
  placeholder?: string;
  onChange: (name: string, value: string) => void;
  type?: string;
  config?: object;
}

export default function Input({ placeholder, onChange, type, config }: Props) {
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.currentTarget.name, e.currentTarget.value);
      }}
      className="padding placeholder-gray-700 px-4 py-2 text-sm bg-white border-b  border-b-gray-700 focus:outline-none focus:border-b-gray"
      {...config}
    />
  );
}
