import { useState } from "react";
import { getTodayStatus } from "@/lib/hours";

export default function OpenPill() {
  const [status] = useState(getTodayStatus);

  return (
    <span className="open-pill">
      <span className={`pulse-dot ${status.isOpen ? "" : "is-closed"}`} />
      {status.label}
    </span>
  );
}