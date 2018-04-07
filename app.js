// variables
let upperKeys = $('#keyboard-upper-container');
let lowerKeys = $('#keyboard-lower-container');

//when document loads have uppercase hidden
$(document).ready(function(){
    $(upperKeys).hide();
})

//when key is pressed down
$(document).keydown(function(e) {
    // when shift is pressed
    if (e.which === 16) {
        //uppercase is displayed
        $(upperKeys).show();
        $(lowerKeys).hide();
    }
});
    //when shift is released
$(document).keyup(function(e){
    if (e.which === 16) {
        //lowercase is displayed
        $(lowerKeys).show();
        $(upperKeys).hide();
    }
})


