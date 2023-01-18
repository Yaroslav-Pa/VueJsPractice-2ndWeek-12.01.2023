document.getElementById("changeBtn").addEventListener("click", function () {
  if (document.getElementById("bodyId").classList.contains("dark-theme")) {
    document.getElementById("bodyId").classList.remove("dark-theme");
    document.getElementById("bodyId").classList.add("light-theme");
  } else if (
    document.getElementById("bodyId").classList.contains("light-theme")
  ) {
    document.getElementById("bodyId").classList.remove("light-theme");
    document.getElementById("bodyId").classList.add("dark-theme");
  }
  console.log(document.getElementById("bodyId").classList);
  localStorage.setItem(
    "body-theme",
    document.getElementById("bodyId").classList
  );
});

if (localStorage.getItem("body-theme") == "dark-theme") {
  document.getElementById("bodyId").classList.add("dark-theme");
} else {
  document.getElementById("bodyId").classList.add("light-theme");
}
