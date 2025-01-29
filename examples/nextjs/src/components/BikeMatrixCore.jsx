"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import BikeMatrix from "@bikematrix/web-components";

export default function BikeMatrixCore() {
  const initialized = useRef(false);
  const pathname = usePathname();

  // Initialize BikeMatrix on mount & destroy on unmount
  useEffect(() => {
    BikeMatrix.init();

    return () => {
      BikeMatrix.destroy();
    };
  }, []);

  // Reload BikeMatrix Web Components on pathname change
  useEffect(() => {
    // Dont reload on first render
    if (!initialized.current) {
      initialized.current = true;
      return;
    }

    // Simple check for BikeMatrix availability and initialization
    if (!BikeMatrix?.isInitialized()) return;

    // Reload BikeMatrix Web Components
    BikeMatrix.reload();
  }, [pathname]);

  return null;
}
