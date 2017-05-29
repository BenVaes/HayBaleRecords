var main = function() {
  //Array aanmaken met alle image-elementen in
  var albumLijst = document.getElementById("slider").getElementsByTagName("img");
  //Lege array maken waar de source attributen van de image-elementen in opslaan
  var mijnArray = [];

  //While aanmaken die alle src attributen van de image-elementen gaat opslaan in de lege array
  var teller = 0;
  while (teller < albumLijst.length){
    mijnArray[teller] = albumLijst[teller].getAttribute("src");
    teller++;
  }

  //Eerste element verwijderen dmv shift en opslaan in een variabele om achteraan te plaatsen dmv push
  var eersteElement = mijnArray.shift();
  mijnArray.push(eersteElement);

  /*While aanmaken die de src attributen, opgeslagen in de eerst nog lege array, in de nieuwe volgorde opslaan
  in de src attributen van de image-elementen. Dus met andere woorden de scr-attributen veranderen*/
  var teller1 = 0;
  while (teller1 < mijnArray.length){
    albumLijst[teller1].setAttribute("src", mijnArray[teller1]);
    teller1++;
  }
}

window.onload = function() {
  setInterval(main, 1000);
  setInterval(countdown, 1000);
}

window.onscroll = function() {
  if (document.body.scrollTop === 0) {
    document.getElementsByTagName("header")[0].classList.remove("shrinked");
  } else {
    document.getElementsByTagName("header")[0].classList.add("shrinked");
  }
};

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function countdown(){
				var now = new Date();
				var eventDate = new Date(2017, 06, 19);

				var currentTiime = now.getTime();
				var eventTime = eventDate.getTime();

				var remTime = eventTime - currentTiime;

				var s = Math.floor(remTime / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);
				var d = Math.floor(h / 24);

				h %= 24;
				m %= 60;
				s %= 60;



				document.getElementById("days").textContent = d;
				document.getElementById("days").innerText = d;

				document.getElementById("hours").textContent = h;
				document.getElementById("minutes").textContent = m;
				document.getElementById("seconds").textContent = s;


			}
