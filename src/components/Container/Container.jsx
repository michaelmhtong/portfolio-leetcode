import clsx from "clsx";

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
