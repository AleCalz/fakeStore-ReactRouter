import { clsx } from "clsx"

export default function PageSection({ children, title, className, contentClassName }) {
  return (
    <section
      className={clsx(
        "w-full p-4 flex felx-col justify-center items-center",
        className
      )}
    >
      {title && <h1 className="text-3xl text-center font-bold">{title}</h1>}
      <div className={clsx("w-full max-w-screen-xl", contentClassName)}>
        {children}
      </div>
    </section>
  );
}
