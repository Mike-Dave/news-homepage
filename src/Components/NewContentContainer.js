import NewContentInfo from "./NewContentInfo";

export default function NewContentContainer() {
  const theFuture = [
    {
      title: "Hydrogen VS Electric Cars",
      content: "Will hydrogen-fueled cars ever catch up to EVs?",
      id: 1,
    },
    {
      title: "The Downsides of AI Artistry ",
      content:
        "What are the possible adverse effects of on-demand AI image generation?",
      id: 2,
    },
    {
      title: "Is VC Funding Drying Up?",
      content:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
      id: 3,
    },
  ];
  return (
    <section className="bg-veryDarkBlue space-y-4 md:space-y-3 h-[31.25rem] col-[3_/_4] row-[2_/_4] p-5 md:p-7 ">
      <h1 className="text-softOrange text-3xl font-semibold font-inter md:text-4xl">
        New
      </h1>
      {theFuture.map((newContent) => (
        <NewContentInfo newContent={newContent} key={newContent.id} />
      ))}
    </section>
  );
}
