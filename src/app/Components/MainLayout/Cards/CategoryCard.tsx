import "../../../../style/category-card.sass";
import Image, { StaticImageData } from "next/image";
type CategoryCardType = {
  text: string;
  src: StaticImageData;
  alt: string;
};

export const CategoryCard = ({ text, src, alt }: CategoryCardType) => {
  return (
    <div className="category-card nes-pointer">
      <div className="category-card__img-wrapper">
        <Image className="category-card__img" src={src} alt={alt} />
      </div>
      <span className="category-card__text">{text}</span>
    </div>
  );
};
