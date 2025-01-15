import React, { ReactNode } from "react";

interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={`${className} flex flex-col`}>{children}</div>;
}
