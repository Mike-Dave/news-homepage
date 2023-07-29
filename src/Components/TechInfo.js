export default function TechInfo({ tech }) {
  return (
    <div className={`flex gap-5 ${tech.id === 1 ? "pt-10 md:pt-0" : ""}`}>
      <img className="h-[7.188rem]" src={tech.image} alt={tech.title} />
      <div>
        <h1 className="text-3xl font-bold text-grayishBlue pb-1">
          {tech.number}
        </h1>
        <h2 className="text-veryDarkBlue font-bold pb-1 hover:text-softRed cursor-pointer">
          {tech.title}
        </h2>
        <p className="text-grayishBlue mr-3">{tech.content}</p>
      </div>
    </div>
  );
}
