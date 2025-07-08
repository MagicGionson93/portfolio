import { useEffect, useState } from "react";
import i18n from "i18next";

export default function Translation() {
  const [lang, setLang] = useState(window.localStorage.getItem("language"));

  useEffect(() => {
    if (lang === "it") {
      i18n.changeLanguage("it");
      window.localStorage.setItem("language", "it");
      setLang(window.localStorage.getItem("language"));
    } else {
      i18n.changeLanguage("en");
      window.localStorage.setItem("language", "en");
      setLang(window.localStorage.getItem("language"));
    }
  }, [lang]);

  return [lang, setLang];
}
