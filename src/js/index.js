const userLanguage = navigator.language || navigator.userLanguage;

if (!userLanguage.startsWith("es")) {
  fetch("./../languages/es.json")
    .then(response => response.json())
    .then(data => {
      const description = document.querySelector(".description");
      description.innerHTML = data.profile.description;
      const section1 = document.querySelector(".social-networks-h2");
      section1.textContent = data.sections.section1;
      const section2 = document.querySelector(".messaging-h2");
      section2.textContent = data.sections.section2;
      const section3 = document.querySelector(".games-educational-h2");
      section3.textContent = data.sections.section3;
    });
} else {
  console.log("aaa");
}

//  console.log(userLanguage);
//  if (userLanguage.startsWith("es")) {
//    window.location.href = "/es/";
//  } else {
//    window.location.href = "/en/";
//  }
