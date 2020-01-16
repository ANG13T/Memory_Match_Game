let animals = ["./images/dolphin.jpg", "./images/hermit.jpg", "./images/jellyfish.jpg", "./images/nemo.jpg", "./images/octopus.jpg", "./images/orca.jpg", "./images/regal-tang.jpg", "./images/saeurchin.jpg", "./images/seahorse.jpg", "./images/shrimp.jpg", "./images/starfish.jpeg", "./images/stingray.jpg", "./images/turtle.jpg", "./images/walrus.jpg", "./images/whale-shark.jpg", "./images/yellow.jpg", "./images/seal.jpg", "./images/squid.jpg"] 

let arrayLocation = 0;
for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
        $(".gameboard").append(`
        <div image="${animals[++arrayLocation]}" class="game-card">
        ​   
        </div>
        `)
    }
}

$(".game-card").click(function(){
    let imageAddr = $(this).attr("image");
    $(this).css("background-image", `url(${imageAddr})`)
})

