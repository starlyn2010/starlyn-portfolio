"use client";

import dynamic from "next/dynamic";

const CollatzBackground = dynamic(
  () => import("@/components/CollatzBackground"),
  { ssr: false }
);

export default function ClientCollatzBackground() {
  return <CollatzBackground />;
}
