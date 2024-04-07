let titles = document.querySelectorAll(".accordion-title");

titles.forEach((title) => {
  title.addEventListener("click", (event) => {
    let content = title.nextElementSibling;
    let icon = title.querySelector("i");
    content.style.transition = "all 0.5s";
    content.classList.toggle("active");

    if (content.classList.contains("active")) {
      icon.style.transform = "rotate(180deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
    }
    let otherTitles = document.querySelectorAll(".accordion-title");
    otherTitles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        let otherContent = otherTitle.nextElementSibling;
        if (otherContent.classList.contains("active")) {
          otherContent.classList.remove("active");
          let otherIcon = otherTitle.querySelector("i");
          otherIcon.style.transform = "rotate(0deg)";
        }
      }
    });
  });
});
