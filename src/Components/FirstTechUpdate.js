import TechInfo from "./TechInfo";

export default function FirstTechUpdate({ techInfoUpdate }) {
  const firstTechInfo = techInfoUpdate.slice(0, 1);
  return (
    <section className="col-[1_/_2] row-[4_/_5]">
      {firstTechInfo.map((tech) => (
        <TechInfo tech={tech} key={tech.id} />
      ))}
    </section>
  );
}
