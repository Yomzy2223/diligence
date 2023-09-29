import React from "react";

interface propsType {
  name: string;
  address: string;
  adminEmail: string;
}
const MobileBankInfo = ({ name, adminEmail, address }: propsType) => {
  return (
    <div className="flex flex-col gap-6 p-4 border divide-x rounded-sm md:hidden">
      <Each name="Bank name" field={name} />
      <Each name="Bank headquarters address" field={address} />
      <Each name="Admin email" field={adminEmail} />
    </div>
  );
};

export default MobileBankInfo;

const Each = ({ name, field }: { name: string; field: string }) => {
  return (
    <div>
      <p className="font-semibold text-sm mb-3">{name}</p>
      <p className="text-sm">{field || "--"}</p>
    </div>
  );
};
