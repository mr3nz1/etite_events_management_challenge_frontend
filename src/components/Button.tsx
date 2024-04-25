interface Props {
  children: React.JSX.Element | string;
  isDark?: boolean;
  borderColor?: string;
  textColor?: string;
  bgColor?: string;
  className?: string;
}

export default function Button({ children, isDark, className }: Props) {
  return (
    <button
      className={
        `border-2 border-gray-900 font-bold px-6 py-1.5 rounded-full ${
          isDark ? "bg-gray-900 hover:bg-white" : "bg-white hover:bg-gray-900"
        } ${
          isDark
            ? "text-white hover:text-gray-900"
            : "text-gray-900 hover:text-white"
        } transition-all duration-75` +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}
