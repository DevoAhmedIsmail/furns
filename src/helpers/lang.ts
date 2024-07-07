import i18n from "i18next";

export function editTitle(lang :string) {
  if (lang === "ar") {
    document.title = "الاثاث";
  } else {
    document.title = "Furns";
  }
}

export function checkFixLang(lang:string) {
  if (lang === "en") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
  }

  if (lang === "ar") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
  }
}

export function switchLang(lang:string) {
  localStorage.setItem("i18nextLng", lang);
  //   localStorage.setItem("i18nextLng", lang);
  i18n.changeLanguage(lang);
  
  document
  .getElementsByTagName("html")[0]
  .setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document
  .getElementsByTagName("body")[0]
  .setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  if (lang === "ar") {
    document.getElementsByTagName("body")[0].classList.add("ar-lang");
  } else {
    document.getElementsByTagName("body")[0].classList.remove("ar-lang");
  }
  document.getElementsByTagName("html")[0].setAttribute("lang", lang);
  
  editTitle(lang);
  window.location.reload();
}

export function handleNameIdentifier() {
  return localStorage.getItem("i18nextLng") === "ar" ? "nameAr" : "nameEn";
}

export function handleDescriptionIdentifier() {
  return localStorage.getItem("i18nextLng") === "ar"
    ? "descriptionAr"
    : "descriptionEn";
}

export function handleNotificationIdentifier() {
  return localStorage.getItem("i18nextLng") === "en" ? "msgEn" : "msgAr";
}