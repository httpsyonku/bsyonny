function playMusic() {
    var video = document.getElementById('background');
    var music = document.getElementById('music__fun');

    if (video && music) {
        video.muted = false;
        video.play();
        //music.play();
    } else {
        console.error("Video or audio not found.");
    }
}

function toggleMusic() {
    var music = document.getElementById('music__fun');
    var btn = document.getElementById('musicToggleBtn');
    var img = document.getElementById('btn_img_play');3
    if (music.paused) {
        music.play();
        img.src = "assets/pause.svg";
    } else {
        music.pause();
        img.src = "assets/play.svg";
    }
}
    function handleClick() {
        playMusic();
        $('#click__to__play').animate({opacity: 0}, 300); 
        $('#Menu').fadeIn();
        $('#banner').fadeIn();
        $('#menucusstomtext').fadeIn();
        $('#background').fadeIn(); 
        $('.wrapper').css('display', 'flex');
        $('#musicToggleBtn').fadeIn();

    }
