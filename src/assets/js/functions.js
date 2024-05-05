import { descriptionElement, section1, section2, section3, userLanguage } from "./consts.js";

function init(data) {
  descriptionElement.innerHTML = data.profile.description;
  section1.innerHTML = data.sections.section1;
  section2.innerHTML = data.sections.section2;
  section3.innerHTML = data.sections.section3;
}

export const changeLanguage = async language => {
  await fetch(`./../../locales/${userLanguage}.json`)
    .then(req => req.json())
    .then(data => init(data))
    .catch(error => console.error(error));
};
