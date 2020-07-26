const allLetters = document.querySelectorAll('.letter');

// allLetters.forEach(function(letter){
//     console.log("from node list", letter.dataset.key);
// })


window.addEventListener('keydown', function(event){
    // console.log("from key press", event.keyCode);
    allLetters.forEach(function(letter){
        if (event.keyCode === Number(letter.dataset.key)){
            console.log(event.keyCode,Number(letter.dataset.key));
            console.log('success!');
        }
    })

});