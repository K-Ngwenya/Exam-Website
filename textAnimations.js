

function ripple(name){
    var rippleText = document.getElementById(name);
    rippleText.innerHTML = rippleText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '#'+name +' .letter',
        opacity: [0,1],
        easing: "easeInBounce",
        duration: 2000,
        delay: (el, i) => 100 * (i+1)
    }).add({
        targets: '.homePage',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}

function jiggleJiggle(name){
    var rippleText = document.getElementById(name);
    rippleText.innerHTML = rippleText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '#'+name +' .letter',
        opacity: [1,1],
        easing: "easeInBounce",
        duration: 2000,
        delay: (el, i) => 100 * (i+1)
    }).add({
        targets: '.homePage',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}