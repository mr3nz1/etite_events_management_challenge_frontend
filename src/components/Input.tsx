import React from "react";

interface Props {
  placeholder?: string;
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  type?: string;
  config?: object;
}

export default function Input({ placeholder, onClick, type, config }: Props) {
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder}
      onClick={onClick}
      className="padding placeholder-gray-700 px-4 py-2 text-sm bg-white border-b  border-b-gray-700 focus:outline-none focus:border-b-gray"
      {...config}
    />
  );
}
