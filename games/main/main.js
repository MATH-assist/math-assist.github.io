if (localStorage.getItem("appearance") == "neon") {
  var cssElm = document.createElement("link");
  cssElm.setAttribute("href", "/neon.css");
  cssElm.setAttribute("rel", "stylesheet");
  cssElm.setAttribute("id", "neoncss");
  document.head.appendChild(cssElm);

  console.log("neon");
}
if (localStorage.getItem("background") == null) {
  localStorage.setItem("background", "default");
}
if (localStorage.getItem("appearance") !== "neon") {
  if (document.getElementById("neoncss")) {
    const link = document.getElementById("neoncss");
    console.log(link);
    link.remove();

    console.log("remove neon");
  }
}
function setLogo(highlight) {
  document.querySelector("link[rel='icon']").href = "/logo.png";
}
function getLogo(highlight = "#2493ff") {
  console.log("for later update setlogo()");
}
var appearance = localStorage.getItem("appearance");

if (localStorage.hasOwnProperty("appearance")) {
  document
    .getElementsByTagName("body")[0]
    .setAttribute("appearance", appearance);
  setLogo(
    getComputedStyle(document.body)
      .getPropertyValue("--highlight")
      .replaceAll(" ", "")
  );
} else {
  localStorage.setItem("appearance", "default");
  document
    .getElementsByTagName("body")[0]
    .setAttribute("appearance", "default");
}
//Declare variables for cloak here
const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");

//If the window already has title stored in localstorage
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
}
//Fetch and set from user's input
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
} else {
  document.querySelector("link[rel=icon]").href = "/logo.png";
}



//Turn off GSAP null warnings (if present)
try {
  gsap.config({
    nullTargetWarn: false,
  });
} catch {
  //empty b/c no need for return
}

//Hamburger Menu Navbar
const toggleMenu = () => {
  $("#hamburgerMenu").toggleClass("collapsed");
  $(".aa-mobile-overlay").animate(
    {
      height: "toggle",
      opacity: "toggle",
    },
    300
  );
};

const navHeight = 90;
const scrollNavHeight = 65;
let isExpanded = true;

$(window).scroll(function () {
  if ($(window).scrollTop() > navHeight) {
    $(".aa-nav").addClass("aa-small-nav");
    $(".aa-nav-icon").addClass("aa-small-nav-icon");
    $(".aa-nav-items").addClass("aa-small-nav-items");
    $(".aa-nav-items2").addClass("aa-small-nav-items");
    $(".aa-hamburger-menu").addClass("aa-small-hamburger-menu");
    isExpanded = false;
  }

  if (!isExpanded && $(window).scrollTop() < navHeight) {
    $(".aa-nav").removeClass("aa-small-nav");
    $(".aa-nav-icon").removeClass("aa-small-nav-icon");
    $(".aa-nav-items").removeClass("aa-small-nav-items");
    $(".aa-nav-items2").removeClass("aa-small-nav-items");
    $(".aa-hamburger-menu").removeClass("aa-small-hamburger-menu");
    $(".aa-nav-item > a").css("color", "white");
    isExpanded = true;
  }
});



const image_preview = document.getElementById("image-preview");
const console_output = document.getElementById("console-output");

//Change tabTitle
const changeTabTitle = () => {
    const newtitle = document.getElementById("userinput");
    if (newtitle.value == ""){ //check if the input is blank when they submit
        window.localStorage.removeItem("title");
        window.document.title = "LEGEND"
       
       
    } else {
        window.localStorage.setItem("title", newtitle.value);
        window.document.title = newtitle.value; //Set window's title to userinput
  
        
    }
    newtitle.value = ""; //clear input
};
function TabTitle(newtitle)  {
    if (newtitle == ""){ //check if the input is blank when they submit
        console.log(newtitle + ' empty')
        window.localStorage.removeItem("title");
        window.document.title = "Settings"
     
       
    } else {
        console.log(newtitle)
        window.localStorage.setItem("title", newtitle);
        window.document.title = newtitle; //Set window's title to userinput
  
       
    }
};

//Change the tabIcon
const changeTabIcon = () => {
    const newfavicon = document.getElementById("userinput");
    if (validURL(newfavicon.value)){
        document.head.querySelector("link[rel=icon]").href = newfavicon.value;
        window.localStorage.setItem("icon", newfavicon.value);
        loadPreview();
   
    }
    newfavicon.value = ""; //clear input
};
function TabIcon(newfavicon) {
   
    if (validURL(newfavicon)){
        document.head.querySelector("link[rel=icon]").href = newfavicon;
        window.localStorage.setItem("icon", newfavicon);
        loadPreview();
     
  
      
    }
};

//Load preview of image
const loadPreview = () => {
    image_preview.setAttribute("src", localStorage.getItem("icon"));
};

//Clears Tab Icon and Title
const resetTabSettings = () => {
    let items = ["icon", "title"];
    items.forEach(item =>
    window.localStorage.removeItem(item));
    window.location.reload();
};

//URL Validation Regex
const validURL = (str) => {
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
    return !!regex.test(str);
}
var appearance = localStorage.getItem("appearance")

if (localStorage.getItem("appearance") !== null) {
    console.log(appearance)
document.getElementsByTagName("body")[0].setAttribute("appearance", appearance)
document.querySelectorAll(".tabtheme").forEach(e => e.classList.remove("tabbuttonactive"));
document.querySelector(".tabtheme[theme='" + appearance + "']").classList.add("tabbuttonactive")
} else {
    console.log('null')
localStorage.setItem("appearance", "default")
document.getElementsByTagName("body")[0].setAttribute("appearance", "default")
}

function setapp(theme) {
  localStorage.setItem("appearance", theme)
  console.log(theme + ' theme')
  document.querySelectorAll(".tabtheme").forEach(e =>  e.classList.remove("tabbuttonactive"));
  document.querySelector(".tabtheme[theme='" + theme + "']").classList.add("tabbuttonactive")
  document.getElementsByTagName("body")[0].setAttribute("appearance", theme)
if (!localStorage.getItem("favicon")) {
setLogo(getComputedStyle(document.body).getPropertyValue('--highlight').replaceAll(" ", ""))
}
}

var background = localStorage.getItem("background") || "none"
document.querySelector(".tabbg[bg='" + background + "']").classList.add("tabbuttonactive")

function setbg(bg) {
    document.querySelectorAll(".tabbg").forEach(e =>  e.classList.remove("tabbuttonactive"));
    localStorage.setItem("background", bg)
    console.log('set ' + bg)
    document.querySelector(".tabbg[bg='" + bg + "']").classList.add("tabbuttonactive")
    if (bg == "default") {
    loadParticles()
    } else if (bg == "stars") {
    loadStars()
    } else if (bg == "none") {
    destroySquares()
    destroyParticles()
    } else if (bg == "squares") {
        
    loadSquares()
    }
    }

    var sel = localStorage.getItem("plink") || "none"
    document.querySelector(".tabp[p='" + sel + "']").classList.add("tabbuttonactive")

    function pselection(link) {
        localStorage.setItem("plink", link);
        console.log(link);
        document.querySelectorAll(".tabp").forEach(e =>  e.classList.remove("tabbuttonactive"));
  document.querySelector(".tabp[p='" + link + "']").classList.add("tabbuttonactive")
      }
      function setgoogle() {
        TabTitle("Google")
        TabIcon("https://www.google.com/favicon.ico")
      }
      
      function setgoogled() {
        TabTitle("Google Drive")
        TabIcon("https://www.drive.google.com/favicon.ico")
      }
      
      function setedpuzzle() {
        TabTitle("Edpuzzle")
        TabIcon("https://edpuzzle.imgix.net/favicons/favicon-32.png")
      }
      
      function setzoom() {
        TabTitle("Zoom")
        TabIcon("https://st1.zoom.us/zoom.ico")
      }
      function setcanvas() {
        TabTitle("Canvas")
        TabIcon("https://du11hjcvx0uqb.cloudfront.net/favicon.ico")
      }
      
      function setreset() {
        localStorage.removeItem("title")
        localStorage.removeItem("icon")
        document.title = "Settings"
        document.getElementById("userinput").value = ""
      }
