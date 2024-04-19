interface ComponentProps {
  heading: string;
  children?: React.ReactNode
}

export const CvSection = ({ heading, children }: ComponentProps) => (
  <div className="xl:px-12 mt-6">
    {heading &&
      <h2>{heading}</h2>
    }
    <div className="flex flex-col gap-y-10">
      {children}
    </div>
  </div>
);