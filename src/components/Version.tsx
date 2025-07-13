"use client";

import { memo, useEffect } from "react";

const Version = memo(() => {
  useEffect(() => {
    console.info(`App Version: ${process.env.NEXT_PUBLIC_VERSION}`);
  }, []);
  return (
    <div className="fixed right-0 bottom-0 px-2 py-1 mix-blend-difference">
      <p className="font-mono text-[10px] text-white">v{process.env.NEXT_PUBLIC_VERSION}</p>
    </div>
  );
});

Version.displayName = "Version";

export default Version;
