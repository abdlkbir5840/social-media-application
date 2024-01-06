import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LangSelection() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState();
  const [className, setClassName] = useState("btn-group dropstart");

  const handleLanguage = () => {
    switch (i18n.language) {
      case "en":
        setCurrentLang("English");
        setClassName("btn-group dropstart");
        document.body.dir = "ltr";
        break;
      case "fr":
        setCurrentLang("Français");
        setClassName("btn-group dropstart");
        document.body.dir = "ltr";
        break;
      case "ar":
        setCurrentLang("العربية");
        setClassName("btn-group dropend");
        document.body.dir = "rtl";
        break;
      default:
        setCurrentLang("Unknown Language");
        setClassName("btn-group dropstart");
        document.body.dir = "ltr";
    }
  };

  useEffect(() => {
    handleLanguage();
  }, [i18n.language]);

  return (
    <div class={className}>
      <button
        type="button"
        class="btn btn-withe dropdown-toggle outline-non"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {currentLang}
      </button>
      <ul class="dropdown-menu">
        <li onClick={() => i18n.changeLanguage('en')}>
          <a class="dropdown-item" href="#">
            <i class="flag-united-kingdom flag"></i>English{" "}
            <i class="fa fa-check text-success ms-2"></i>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li>
          <a class="dropdown-item" href="#" onClick={() => i18n.changeLanguage('fr')}>
            <i class="flag-poland flag"></i>Français
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#" onClick={() => i18n.changeLanguage('ar')}>
            <i class="flag-china flag"></i>العربية
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#" onClick={() => i18n.changeLanguage('jp')}>
            <i class="flag-japan flag"></i>日本語
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#" onClick={() => i18n.changeLanguage('de')}>
            <i class="flag-germany flag"></i>Deutsch
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#" onClick={() => i18n.changeLanguage('es')}>
            <i class="flag-spain flag"></i>Español
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#" onClick={() => i18n.changeLanguage('py')}>
            <i class="flag-russia flag"></i>Русский
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#" onClick={() => i18n.changeLanguage('po')}>
            <i class="flag-portugal flag"></i>Português
          </a>
        </li>
      </ul>
    </div>
  );
}
