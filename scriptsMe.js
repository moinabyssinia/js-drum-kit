const allLetters = document.querySelectorAll('.letter');

/* define sound objects for letters */
let keyData ={
    70: {
        sound: new Howl({
            src: ['sounds/ride.wav']
        })
    },
    76: {
        sound: new Howl({
            src: ['sounds/tom.wav']
        })
    },
    79: {
        sound: new Howl({
            src: ['sounds/tink.wav']
        })
    },
    82: {
        sound: new Howl({
            src: ['sounds/snare.wav']
        })
    },
    73: {
        sound: new Howl({
            src: ['sounds/openhat.wav']
        })
    },
    68: {
        sound: new Howl({
            src: ['sounds/kick.wav']
        })
    },
    65: {
        sound: new Howl({
            src: ['sounds/clap.wav']
        })
    }
}


/* apply transition on keys when typed */
window.addEventListener('keydown', function(event){
    allLetters.forEach(function(letter){
        if (event.keyCode === Number(letter.dataset.key)){
            letter.classList.add('playing');
            // play corresnponding audio file
            keyData[event.keyCode].sound.play();
            //remove the playing class when transition ends
            letter.addEventListener('transitionend', function(){
                letter.classList.remove('playing');
            })
        }
    })

});
