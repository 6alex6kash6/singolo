const navigation = document.querySelector(".navigation");

navigation.addEventListener("click", event => {
  navigation.querySelectorAll("a").forEach(element => {
    element.classList.remove("active");
  });

  event.target.classList.add("active");
});
