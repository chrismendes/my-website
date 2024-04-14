import React from "react";
import type { KeyTextField } from "@prismicio/client";

export interface ComponentProps {
  icon: JSX.Element;
  iconCn?: string;
  small?: boolean;
  label: KeyTextField;
  showLabel?: boolean | undefined;
}

export const SkillIcon = ({ icon, small = false, iconCn, label, showLabel }: ComponentProps) => {
  
  const baseIconCn = "w-auto";
  const sizeCn = (small) ? "h-[30px]" : "";
  const iconComponent = React.cloneElement(icon, {
    className: `${baseIconCn} ${sizeCn} ${iconCn}`
  });
  
  if (icon && React.isValidElement(icon)) {
    return (
      <div className="flex flex-col items-center justify-center gap-y-3 min-w-14">
        {iconComponent}
        {showLabel !== false &&
          <span className="text-sm text-center font-sans text-slate-500">{label}</span>
        }
      </div>
    )
  }

  return null;
};