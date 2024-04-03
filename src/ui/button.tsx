import Link from "next/link";

interface ComponentProps {
  label: string;
  link: string;
  newWindow?: boolean;
  icon?: React.ReactNode;
  style?: "primary" | "secondary";
}


export const Button = ({ label, link, newWindow, icon, style }: ComponentProps) => {
  
  const stylePrimary = `bg-accent text-white hover:bg-accent-dark ${(icon) ? "pt-2.5" : ""}`;
  const styleSecondary = "bg-white border-accent border-2 text-accent";
  const cn = (style === "secondary") ? styleSecondary : stylePrimary;
  
  return (
    <Link
      className={`${cn} flex gap-x-2 rounded-3xl px-4 py-2 text-sm font-sans font-medium uppercase leading-normal whitespace-nowrap`}
      href={link}
      target={(newWindow) ? "_blank" : "_self"}
    >
      {icon}
      {label}
    </Link>
  );
};