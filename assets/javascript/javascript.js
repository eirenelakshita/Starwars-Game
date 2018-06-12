var youChar;

var enemyChar;

// Make & give each characters properties (hp, name, stats)
// <!-- Obi-Wan Kenobi -->
var characters = [{
    "name": "Obi-Wan Kenobi",
    hp: 150,
    defense: 10,
    attack: 15,
    image: "assets/images/obiwankenobi.jpg"
},

// <!-- Han Solo -->
{
    name: "Han Solo",
    hp: 100,
    defense: 10,
    attack: 10,
    image: "assets/images/hansolo.jpg"
},

// Chewbacca
{
    name: "Chewbacca",
    hp: 100,
    defense: 15,
    attack: 5,
    image: "assets/images/chewbecca.jpg"
},

// <!-- Darth Vader -->
{
    name: "Darth Vader",
    hp: 100,
    defense: 10,
    attack: 5,
    image: "assets/images/darthvader.jpg"
},

// <!-- Count Grivous -->
{
    name: "Count Grievous",
    hp: 100,
    defense: 10,
    attack: 5,
    image: "assets/images/countgrievous.jpg"
},

// <!-- Count Dooku -->
{
    name: "Count Dooku",
    hp: 100,
    defense: 10,
    attack: 5,
    image: "assets/images/countdooku.jpg"
}];

// <!-- Use function to display characters -->

function charimages(name) {
    var callpic = $("<img>");
    callpic.attr("src", name);
    callpic.addClass("chars col-md-2");
    callpic.attr("id", characters[i].name)
    $("#imagedisplay").append(callpic);
}

for(i=0; i<characters.length; i++) {
charimages(characters[i].image);
}

// for(i=0; i<characters.length; i++) {
//     var cards = $("<div>");
//     cards.addClass("card");
//     cards.attr("class", characters[i].name);
//     cards.append(charimages(characters[i].image));
//     var cbody = $("<div>");
//     cbody.addClass("card-body");
//     $(".card-body").html("<p>" + characters[i].name + "</p>");
// }

for(i=0; i<characters.length; i++) {
    statChart = $("<div>");
    statChart.addClass("col-md-2");
    statChart.append("<p><b>" + characters[i].name + "</b></p>");
    statChart.append("<p>Hp:" + characters[i].hp + "</p>");
    statChart.append("<p>Defense: " + characters[i].defense + "</p>");
    statChart.append("<p>Offense: " + characters[i].attack + "</p>");
    $("#statdisplay").append(statChart);
    }

// Player choose character

$(".chars").click(function() {
    console.log($(this).attr("id"));
    if ($(this).attr("id") === characters[0].name) {
        youChar = characters[0];
        console.log(characters[0]);
        $('[id="Obi-Wan Kenobi"]').clone().appendTo("#youpic");
        this.style.display = "none";
    }
    $("#msgboard").html("<h2>Choose your nemesis:</h2>");
});

$(".chars").click(function() {
    console.log($(this).attr("id"));
    if ($(this).attr("id") === characters[1].name) {
        youChar = characters[1];
        console.log(characters[1]);
        $('[id="Han Solo"]').clone().appendTo("#youpic");
        this.style.display = "none";
    }
    $("#msgboard").html("<h2>Choose your nemesis:</h2>");
});

$(".chars").click(function() {
    console.log($(this).attr("id"));
    if ($(this).attr("id") === characters[2].name) {
        youChar = characters[2];
        console.log(characters[2]);
        $('[id="Chewbecca"]').clone().appendTo("#youpic");
        this.style.display = "none";
    }
    $("#msgboard").html("<h2>Choose your nemesis:</h2>");
});

$(".chars").click(function() {
    console.log($(this).attr("id"));
    if ($(this).attr("id") === characters[3].name) {
        youChar = characters[3];
        console.log(characters[3]);
        $('[id="Darth Vader"]').clone().appendTo("#youpic");
        this.style.display = "none";
    }
    $("#msgboard").html("<h2>Choose your nemesis:</h2>");
});

$(".chars").click(function() {
    console.log($(this).attr("id"));
    if ($(this).attr("id") === characters[4].name) {
        youChar = characters[4];
        console.log(characters[4]);
        $('[id="Count Grievous"]').clone().appendTo("#youpic");
        this.style.display = "none";
    }
    $("#msgboard").html("<h2>Choose your nemesis:</h2>");
});

$(".chars").click(function() {
    console.log($(this).attr("id"));
    if ($(this).attr("id") === characters[5].name) {
        youChar = characters[5];
        console.log(characters[5]);
        $('[id="Count Dooku"]').clone().appendTo("#youpic");
        this.style.display = "none";
    }
    $("#msgboard").html("<h2>Choose your nemesis:</h2>");
});

// $(".chars").click(function() {
//     $("#msgboard").html("<h2>Let the battle begin!</h2>");
// });

// Create battle environment



// Make attack button



// Define Counters





///////////////////////////////////////////////////////FUNCTION///////////////////////////////////////////////////////

// Attack
// function attack(event) {
// $("#attackbutton").click().
// };

// Choose Character

// Reset


///////////////////////////////////////////////////////FUNCTION///////////////////////////////////////////////////////


// Win/Lose Conditions
// If you win, your score goes up and your opponent character disappears and choose the next enemy 
// If you lose, GAME OVER and reset



// As you win from one enemy to the next, your attack gets better



// You can win if you choose characters in the right order
