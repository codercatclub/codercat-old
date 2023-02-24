import { useEffect, useState } from "react";

// Older iOS browser like iPhone 8 do not have support for addEventListener so we fall back to addListener
const addListenerWithLegacyFallback = (m: MediaQueryList, callback: (e: MediaQueryListEvent) => void) =>
  m.addEventListener ? m.addEventListener("change", callback) : m.addListener(callback);

const removeListenerWithLegacyFallback = (m: MediaQueryList, callback: (e: MediaQueryListEvent) => void) =>
  m.removeEventListener ? m.removeEventListener("change", callback) : m.removeListener(callback);

export const useQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(true);

  const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const m = window.matchMedia(query);

    setMatches(m.matches);

    addListenerWithLegacyFallback(m, handleChange);

    return () => {
      removeListenerWithLegacyFallback(m, handleChange);
    };
  }, []);

  return !matches;
};
