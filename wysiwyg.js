var famous = [
    {
      title: "Samurai",
      name: "Tomoe Gozen",
      bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
      image:"https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
      lifespan: {
        birth: 1747,
        death: 1797
      }
    },
    {
      title: "President",
      name: "Abraham Lincoln",
      bio: " was an American politician and lawyer who served as the 16th President of the United States from March 1861 until his assassination in April 1865",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg",
      lifespan: {
        birth: 1809,
        death: 1865
      }
    },
    {
      title: "Musician",
      name: "Ryan Adams",
      bio: "is an American singer-songwriter, musician, record producer, and poet. He is best known for his prolific solo career, during which he has released fifteen albums, and as a former member of alternative country band Whiskeytown, with whom he recorded three studio albums.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/64/RyanAdams06.jpg",
      lifespan: {
        birth: 1974,
        death: "Present"
      }
    },
    {
      title: "Inventor",
      name: "Nikola Tesla",
      bio: "Inventor, electrical engineer, mechanical engineer, physicist, and futurist who is best known for his contributions to the design of the modern alternating current electricity supply system.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/1280px-N.Tesla.JPG",
      lifespan: {
        birth: 1856,
        death: 1943
      }
    }
];

var container = document.getElementById("container");


for (element in famous){
    container.innerHTML +=
    `<article class="famous-container">
        <header class="famous-header">
            <h2 class="famous-name">${famous[element].name}</h2>
            <h3>${famous[element].title}</h3>
        </header>
        <section class="famous-section">
            <p>${famous[element].bio}</p>
            <img src="${famous[element].image}" alt ="picture of ${famous[element].name}" class="famous-image">
        </section>
        <footer>
            <p> Lifespan: ${famous[element].lifespan.birth} - ${famous[element].lifespan.death} </p>
        </footer>
    </article> `

};

var famousNames = document.getElementsByClassName("famous-name");
var userInput = document.getElementById("user-input");
var eventTarget = "";
var classBio ="";

for (var i=0;i<famousNames.length;i++){
    famousNames.item(i).addEventListener("click", function(event){
        event.target.classList.toggle("bordered");
        userInput.focus();
        eventTarget = event.target;
        console.log(eventTarget);
    });
}
userInput.addEventListener("keyup", function(potato){
    classBio = eventTarget.parentNode.nextSibling;
    classBio.innerHTML = potato.target.value;
});





















