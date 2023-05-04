import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}



export function Container({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "w-full max-w-7xl mx-auto px-2 lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}
