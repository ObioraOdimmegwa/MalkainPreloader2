
if (sessionStorage.getItem("current") == "true") {
  //go to main page
  //window.location.replace("https://malkain.com/");
}

function count() {
  setTimeout(function () {
   sessionStorage.setItem("current", "true");
   //window.location.replace("https://malkain.com/");

   document.getElementById('videoSection').classList.add("move-up")
  }, 9000); 
}

count();
