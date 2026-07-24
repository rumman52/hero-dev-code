"use client";

import dynamic from "next/dynamic";

const ImpactOrbit = dynamic(() => import("@/components/ImpactOrbit3D"), {
  ssr: false,
  loading: () => (
    <div className="panel grid min-h-[420px] place-items-center muted">
      Loading solution engine…
    </div>
  ),
});

export { ImpactOrbit };
