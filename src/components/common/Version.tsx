"use client";

import { memo, useEffect } from "react";

const Version = memo(() => {
  useEffect(() => {
    console.info(`App Version: ${process.env.NEXT_PUBLIC_VERSION}`);
  }, []);
  return (
    <div className="fixed bottom-0 right-0 px-2 py-1 mix-blend-difference">
      <p className="text-white text-[10px] font-mono">v{process.env.NEXT_PUBLIC_VERSION}</p>
    </div>
  );
});

Version.displayName = "Version";

export default Version;
