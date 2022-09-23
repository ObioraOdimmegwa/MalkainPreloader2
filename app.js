if (sessionStorage.getItem("current") == "true") {
  //go to main page
  window.location.replace("https://malkain.com/");
}
document.getElementById("btn").addEventListener("click", function () {
  if (sessionStorage.getItem("current") == "true") {
    //go to main page
    window.location.replace("https://malkain.com/");
  }
  
  window.location.replace("./videoPage2.html");
});
