import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <div>
        <h1>This is Blog Header</h1>
      </div>
      {children}
    </>
  );
}
