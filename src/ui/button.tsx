import Link from "next/link";

interface ComponentProps {
  label: string;
  link: string;
  icon?: React.ReactNode;
  style?: "primary" | "secondary";
}

const stylePrimary = "bg-accent text-white hover:bg-accent-dark pt-2.5";
const styleSecondary = "border-accent border-2 text-accent";

export const Button = ({ label, link, icon, style }: ComponentProps) => {

  const cn = (style === "secondary") ? styleSecondary : stylePrimary;
  
  return (
    <Link
      className={`${cn} flex gap-x-2 rounded-3xl px-4 py-2 text-sm font-sans font-medium uppercase leading-normal`}
      href={link}
    >
      {icon}
      {label}
    </Link>
  );
};