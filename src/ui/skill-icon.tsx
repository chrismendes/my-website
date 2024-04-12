import React from "react";
import type { KeyTextField } from "@prismicio/client";

export interface ComponentProps {
  icon: React.ReactNode,
  label: KeyTextField,
  showLabel?: boolean | undefined,
}

export const SkillIcon = ({ icon, label, showLabel }: ComponentProps) => (
  <>
    {icon && React.isValidElement(icon) &&
      <div className="flex flex-col items-center justify-center gap-y-3 min-w-14">
        {icon}
        {showLabel !== false &&
          <span className="text-sm text-center font-sans text-slate-500">{label}</span>
        }
      </div>
    }
  </>
);