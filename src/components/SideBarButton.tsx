import React from "react";

interface Props {
  children: React.JSX.Element[];
}

export default function SideBarButton({ children }: Props) {
  return <button className="flex gap-4 items-center hover:scale-95">{children} </button>;
}
