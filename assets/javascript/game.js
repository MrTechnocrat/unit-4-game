
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        'https://dn7bfzahk3q3q.cloudfront.net/media/6/photos/products/704675/19675-6775-kristalle-zuechten-rot-a_1_g.jpg',
        'http://antoinettesboutique.co.nz/wp-content/uploads/2017/10/rock.png',
        'https://www.healingcrystals.com/images/Amethyst---Amethyst-Points---Dark-ExtraA-Brazil-01.jpg',
        'http://www.sciencetoystore.com/contents/media/l_crystal_yellow_.jpg'];


random_result = Math.floor(Math.random() * 69 ) + 30;



$("#result").html('Random Result: ' + random_result);

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);

    

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });


    $(".crystals").append(crystal);
    }

    $("#previous").html("Total Score: " + previous);
}

resetAndStart();

$(document).on('click',  ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));
    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);
   
    if(previous > random_result){
        lost++;

        $("#lost").html(" You Loss: " + lost);

        previous = 0;

        

        resetAndStart();

    }
    else if(previous === random_result){
        win++;

        $("#win").html("You Win: " + win);

        previous = 0; 

       

        resetAndStart();
    }

}); 
// Building A game with 4 Crystals and random result

// Every Crystal needs to have a random number between 1-12
// A new random nuber should generate everytime you win or lose
// When clicking on any Crystal, it should be adding up with the previous one 
// Until it equals the total score
// If it's not equal you start over
// If it's is equal, then we add to win counter





