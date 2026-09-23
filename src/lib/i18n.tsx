import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "id" | "en";
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "id", setLanguage: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  useEffect(() => {
    const saved = window.localStorage.getItem("senusa-language");
    if (saved === "en") setLanguageState("en");
  }, []);
  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem("senusa-language", next);
    document.documentElement.lang = next;
  };
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }
export function bi<T>(language: Language, value: { id: T; en: T }) { return value[language]; }