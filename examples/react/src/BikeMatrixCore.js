import { useEffect, useRef } from "react";
import BikeMatrix from "@bikematrix/widget";

export default function BikeMatrixCore() {
  const initialized = useRef(false);

  // Initialize BikeMatrix on mount & destroy on unmount
  useEffect(() => {
    BikeMatrix.init();

    return () => {
      BikeMatrix.destroy();
    };
  }, []);

  // Reload BikeMatrix Web Components
  useEffect(
    () => {
      // Dont reload on first render
      if (!initialized.current) {
        initialized.current = true;
        return;
      }

      // Simple check for BikeMatrix availability and initialization
      if (!BikeMatrix?.isInitialized()) return;

      // Reload BikeMatrix Web Components
      BikeMatrix.reload();
    },
    [
      // Variables to watch eg. location.pathname
    ]
  );

  return null;
}
