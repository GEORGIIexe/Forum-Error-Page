var msgs = [
    'ვებ გვერდზე მიმდინაერობს',
    'ტექნიკური სამუშოაები',
    'მალე გამოსწორდება ყველაფერი',
  ],
  keySoundUrl = ((new Audio()).canPlayType("audio/ogg; codecs=vorbis")===""), 
  keySound = new Audio( keySoundUrl ),
  enableSound = true,
  typeSpeed = 100,
  pauseSpeed = 1500,
  totalLine = 7,
  str_length = msgs[0].length,
  contentDiv = document.getElementById('content'),
  index = 0,
  text_pos = 0;

var type_text = function() {

var row = Math.max( 0, index - totalLine ),
    contents = '';
  
while( row < index ) {
  contents += msgs[ row++ ] + "<br>";
}
  
contentDiv.innerHTML = contents + msgs[ index ].substring( 0, text_pos ) + '<span class="blink">|</span>';

if( enableSound ) {
  keySound.play();
}

if( text_pos++ == str_length ) {
  text_pos = 0;
  index++;
  
  if( index != msgs.length ) {
    str_length = msgs[ index ].length;
    setTimeout( 'type_text()', pauseSpeed );
  } 
  
} else {
  setTimeout( 'type_text()', typeSpeed );
}

}

window.onload = function(){
type_text();
}