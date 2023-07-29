export default function WholeContent({ children }) {
  return (
    <section className="p-4 pb-14 space-y-3 md:grid grid-cols-3 max-w-6xl gap-x-7 gap-y-4 ">
      {children}
    </section>
  );
}
