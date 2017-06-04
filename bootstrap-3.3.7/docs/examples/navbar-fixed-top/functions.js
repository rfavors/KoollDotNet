$(document).ready(function(){
    var $this=$(this),
    audio =$this.siblings('audio')[0];

    audio.play();
    $this.addClass('playing');
});
