function changeName() {
    var userName = document.getElementById("name");
    var displayUserName = document.getElementById("nameBadge");
    displayUserName.innerHTML = userName.value;
  
    if (userName.value == "") {
      displayUserName.innerHTML = "Your name here";
    }
  }
  

  function changeRole() {
    var roleSelect = document.getElementById("role").value;
    var roleBadge = document.getElementById("roleBadge");

    if (roleSelect == "accountant") {
      roleBadge.innerHTML = "Accountant";
    } else if (roleSelect == "teacher") {
      roleBadge.innerHTML = "Teacher";
    } else if (roleSelect == "student") {
      roleBadge.innerHTML = "Student";
    } else if (roleSelect == "manager") {
      roleBadge.innerHTML = "Manager";
    } else if (roleSelect == "assistant") {
      roleBadge.innerHTML = "Assistant";
    }
  }
  

  function changeColor() {
    var colorSelect = document.getElementById("color").value;
    var gradientBox = document.getElementById("gradientBox");

    if (colorSelect == "red") {
      gradientBox.style.background =
        "linear-gradient(137deg, rgba(182,28,205,1) 15%, rgba(187,0,0,1) 72%)";
    } else if (colorSelect == "green") {
      gradientBox.style.background =
        "linear-gradient(137deg, rgba(28,91,205,1) 15%, rgba(76,187,0,1) 72%)";
    }  else if (colorSelect == "pink") {
      gradientBox.style.background =
        "linear-gradient(137deg, rgba(205,28,28,1) 15%, rgba(185,0,187,1) 72%)";
    } 
    else if (colorSelect == "gold") {
      gradientBox.style.background =
        "linear-gradient(137deg, rgba(205,197,28,1) 25%, rgba(187,0,0,1) 77%)";
    } 
    else if (colorSelect == "orange") {
      gradientBox.style.background =
        "linear-gradient(137deg, rgba(205,93,28,1) 27%, rgba(187,178,0,1) 77%)";
    } 
    else if (colorSelect == "grey") {
      gradientBox.style.background =
        "linear-gradient(137deg, rgba(128,120,116,1) 28%, rgba(22,22,20,1) 77%)";
    } else if (colorSelect == "violett") {
      gradientBox.style.background =
        "linear-gradient(137deg, rgba(28,56,255,1) 26%, rgba(240,137,251,1) 77%)";
    } 
    else if (colorSelect == "lightblue") {
      gradientBox.style.background =
        "linear-gradient(137deg, rgba(28,239,255,1) 26%, rgba(159,251,137,1) 77%)";
    } 
  
  }
  

  const imageInput = document.querySelector("#fileInput"); 

  imageInput.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => { 
      const uploadedImage = reader.result;
      document.querySelector(
        "#photoBadge"
      ).style.backgroundImage = `url(${uploadedImage})`; // 
     
    });
    reader.readAsDataURL(this.files[0]); 
  });
  
  
  function download() {
   
    const screenShotTarget = document.querySelector(".displayBadge"); 
  

    html2canvas(screenShotTarget).then((canvas) => {
      const baseImageLink = canvas.toDataURL("image/png");
      var aTag = document.createElement("a"); 
      aTag.setAttribute("href", baseImageLink); 
      aTag.setAttribute("download", "Lebenslauf.png");
      aTag.click();
  
      
    });
  }
  




