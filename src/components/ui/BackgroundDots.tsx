interface DotPatternBackgroundProps {
  dotSize?: number;
  dotColor?: string;
  backgroundColor?: string;
  gap?: number;
  maskColor?: string;
  className?: string;
  style?: React.CSSProperties;
  fade?: boolean;
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const BackgroundDots: React.FC<DotPatternBackgroundProps> = ({
  dotSize = 1.2,
  dotColor = "#9400FF",
  backgroundColor = "transparent",
  gap = 20,
  className,
  fade = true,
  style,
  ...props
}) => {
  const encodedDotColor = encodeURIComponent(dotColor);
  const validatedDotSize = typeof dotSize === "number" && dotSize > 0 ? dotSize : 1.2;

  const maskStyle: React.CSSProperties = fade
    ? {
        maskImage: "radial-gradient(circle, white 10%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(circle, white 10%, transparent 90%)",
      }
    : {};

  const backgroundStyle: React.CSSProperties = {
    backgroundColor,
    backgroundImage: gap
      ? `url("data:image/svg+xml,%3Csvg width='${gap}' height='${gap}' viewBox='0 0 ${gap} ${gap}' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${encodedDotColor}' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='${validatedDotSize}' cy='${validatedDotSize}' r='${validatedDotSize}'/%3E%3C/g%3E%3C/svg%3E")`
      : undefined,
    ...maskStyle,
    ...style,
  };

  return (
    <div
      className={`absolute inset-0 h-full w-full ${className || ""}`}
      style={backgroundStyle}
      {...props}
    />
  );
};

export default BackgroundDots;
