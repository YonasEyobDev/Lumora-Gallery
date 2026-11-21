import { useEffect, useState } from "react";
import { Camera } from "lucide-react";

export default function Picture({ src, alt, className = "", ...rest }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} grid place-items-center p-8`}
        style={{
          background:
            "linear-gradient(135deg, rgba(61,214,198,0.16), rgba(124,92,255,0.16)), var(--surface)",
          color: "var(--dim)",
        }}
      >
        <Camera className="h-8 w-8 opacity-60" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}