import mobileImage from "../images/image-web-3-mobile.jpg";
import desktopImage from "../images/image-web-3-desktop.jpg";

export default function MainImage() {
  return (
    <>
      <img
        className="mt-7 md:hidden"
        src={mobileImage}
        alt={"colored shapes of deifferent forms"}
      />
      <img
        className="hidden mt-7 md:block col-[1_/_3] row-[2_/_3]"
        src={desktopImage}
        alt={"colored shapes of deifferent forms"}
      />
    </>
  );
}
