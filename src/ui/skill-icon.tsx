interface ComponentProps {
  image: React.ReactNode,
  label: string,
  showLabel?: boolean | undefined,
}

export const SkillIcon = ({ image, label, showLabel }: ComponentProps) => (
  <div className="flex flex-col items-center justify-center gap-y-3 min-w-14">
    {image}
    {showLabel !== false &&
      <span className="text-sm text-center font-sans text-slate-500">{label}</span>
    }
  </div>
);