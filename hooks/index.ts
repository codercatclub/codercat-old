import { useEffect, useState } from 'react';

export const useQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>();

  const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);

  useEffect(() => {
    const m = window.matchMedia(query);

    setMatches(m.matches);

    m.addEventListener("change", handleChange);

    return () => {
      m.removeEventListener("change", handleChange);
    };
  }, []);

  return !matches;
};
