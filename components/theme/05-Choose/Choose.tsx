import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

const ChooseCard = ({ image, title, description }: CardProps) => {
  return (
    <div className="basis-[33%] bg-white shadow-lg rounded-lg p-[35px] border-3 border-[#41806481]">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex justify-center items-center p-2 bg-[#ffffff] rounded-full w-[27%] md:w-[24%] mt-[-70px] mb-[10px] shadow-lg">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="object-contain w-auto max-w-[100%] md:max-w-[95%] h-auto"
            priority
          />
        </div>
        <p className="text-[16px] font-semibold text-center" >{title}</p>
        <p className="text-[16px] font-medium text-center">{description}</p>
      </div>
    </div>
  );
};

export default ChooseCard;
