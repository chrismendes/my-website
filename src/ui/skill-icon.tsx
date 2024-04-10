import type { KeyTextField } from "@prismicio/client";

interface ComponentProps {
  image: React.ReactNode,
  label: KeyTextField,
  showLabel?: boolean | undefined,
}

export const SkillIcon = ({ image, label, showLabel }: ComponentProps) => (
  <div className="flex flex-col items-center justify-center mx-auto gap-y-3 min-w-14">
    {image}
    {showLabel !== false &&
      <span className="text-sm text-center font-sans text-slate-500">{label}</span>
    }
  </div>
);