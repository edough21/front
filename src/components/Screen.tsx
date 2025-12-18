import type { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
}

export default function Screen({ title, children }: Props) {
  return (
    <div style={{ padding: 20 }}>
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </div>
  );
}
