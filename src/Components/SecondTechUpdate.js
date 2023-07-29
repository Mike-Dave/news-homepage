import TechInfo from "./TechInfo";

export default function SecondTechUpdate({ techInfoUpdate }) {
  const secondTechInfo = techInfoUpdate.slice(1, 2);
  return (
    <section className="col-[2_/_3] row-[4_/_5]">
      {secondTechInfo.map((tech) => (
        <TechInfo tech={tech} key={tech.id} />
      ))}
    </section>
  );
}
