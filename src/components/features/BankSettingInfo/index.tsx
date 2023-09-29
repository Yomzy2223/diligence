import DesktopBankInfo from "./DesktopBankInfo";
import MobileBankInfo from "./MobileBankInfo";

interface BankInfoProps {
  image: any;
  name: string;
  address: string;
  adminEmail: string;
}

export const BankSettingInfo = ({ image, name, address, adminEmail }: BankInfoProps) => {
  return (
    <div className="space-y-3 md:space-y-4">
      <h6 className="text-base font-normal leading-6 text-foreground md:text-xl">
        Bank Information
      </h6>
      <DesktopBankInfo address={address} adminEmail={adminEmail} name={name} image={image} />
      <MobileBankInfo address={address} adminEmail={adminEmail} name={name} />
    </div>
  );
};
