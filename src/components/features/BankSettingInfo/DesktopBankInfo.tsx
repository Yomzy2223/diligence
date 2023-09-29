import React from "react";
import imageLoading from "@/assets/images/imagePlaceholder.png";
import Image from "next/image";

interface propsType {
  image: any;
  name: string;
  address: string;
  adminEmail: string;
}

const DesktopBankInfo = ({ image, name, address, adminEmail }: propsType) => {
  return (
    <div className="hidden gap-6 p-6 border divide-x rounded-sm md:flex">
      <Image
        src={image || imageLoading}
        width={148}
        height={148}
        alt={`${name}-image`}
        className="object-fit"
      />
      <div className="flex grow-[5] divide-x">
        <div className="flex flex-col px-6 divide-y grow">
          <Detail detailName="Bank name" detail={name} />
          <Detail detailName="Bank headquarters address" detail={address} />
        </div>
        <div className="flex flex-col justify-start px-6 divide-y grow">
          <Detail detailName="Account admin email" detail={adminEmail} />
        </div>
      </div>
    </div>
  );
};

export default DesktopBankInfo;

const Detail = ({ detail, detailName }: { detailName: string; detail: string }) => {
  return (
    <div className="flex flex-col space-y-2 grow">
      <p className="text-base font-medium leading-snug text-foreground tracking-[0.32px]">
        {detailName}
      </p>
      <p className="text-base leading-relaxed text-[#959697]">{detail || "--"}</p>
    </div>
  );
};
