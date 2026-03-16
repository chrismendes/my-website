import React from "react";
import type { KeyTextField, ImageField } from "@prismicio/client";

type ClassNameableElement = React.ReactElement<{ className?: string }>;

export interface ComponentProps {
  icon: ClassNameableElement | ImageField;
  iconCn?: string;
  small?: boolean;
  label: KeyTextField;
  showLabel?: boolean;
}

export const SkillIcon = ({
  icon,
  small = false,
  iconCn,
  label,
  showLabel,
}: ComponentProps) => {
  if (!icon) return null;

  const baseIconCn = "w-auto";
  const sizeCn = small ? "h-[30px]" : "";

  if (React.isValidElement<{ className?: string }>(icon)) {
    const iconComponent = React.cloneElement(icon, {
      className: `${baseIconCn} ${sizeCn} ${iconCn ?? ""}`,
    });

    return (
      <div className="flex flex-col items-center justify-center gap-y-3 min-w-14">
        {iconComponent}
        {showLabel !== false && (
          <span className="text-sm text-center font-sans text-slate-500">
            {label}
          </span>
        )}
      </div>
    );
  }

  return null;
};