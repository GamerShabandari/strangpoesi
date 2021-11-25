let minArray = ["hej", "då", "du", "jag", "vi", "ni", "dem", "spela", "träna", "googla", "lira", "käka", "äta", "slå", "hämta"];

let userArray = [];

//console.log(minArray);

let minContainer = document.getElementById("container");

let minContainer2 = document.getElementById("container2");

let myBtn = document.getElementById("myBtn");

for (let i = 0; i < minArray.length; i++) {
    let nyKnapp = minContainer.insertAdjacentHTML("afterbegin", "<button>"+minArray[i]+"</button>");
}


minContainer.addEventListener("click", e => {
        let valdOrd = e.target.innerText;
        //console.log(e.target.innerText);
        userArray.push(valdOrd);

        //console.log(userArray);

});

myBtn.addEventListener("click", function(){
    minContainer2.append(userArray);



    //console.log(userArray);
});

  