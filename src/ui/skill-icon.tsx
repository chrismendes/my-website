import Image from "next/image";

interface ComponentProps {
  image: string,
  label: string,
  showLabel?: boolean
}

export const SkillIcon = ({ image, label, showLabel }: ComponentProps) => (
  <Image
    src={image}
    width={40}
    alt={label}
  />
);