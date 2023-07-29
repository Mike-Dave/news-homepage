export default function NewContentInfo({ newContent }) {
  return (
    <>
      <h1 className="text-offWhite font-bold text-xl font-inter pt-4 md:text-[1.3rem] hover:text-softOrange cursor-pointer">
        {newContent.title}
      </h1>
      <p className="text-darkGrayishBlue pb-3 font-inter text-[0.95rem] md:pb-5">
        {newContent.content}
      </p>
      {newContent.id !== 3 && <hr className="border-darkGrayishBlue" />}
    </>
  );
}
