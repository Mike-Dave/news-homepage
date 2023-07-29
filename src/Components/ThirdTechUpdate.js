import TechInfo from "./TechInfo";

export default function ThirdTechUpdate({ techInfoUpdate }) {
  const thirdTechInfo = techInfoUpdate.slice(2, 3);
  return (
    <section className="col-[3_/_4] row-[4_/_5]">
      {thirdTechInfo.map((tech) => (
        <TechInfo tech={tech} key={tech.id} />
      ))}
    </section>
  );
}
