let styles = ["punk", "goth", "light rock", "hard rock", "grunge", "lo-fi", "prog rock", "anime", "blues", "baroque", "classical", "early music", "minimalism", "country", "house", "techno", "drum n' bass", "trance", "chiptune", "american folk", "latin jazz", "bebop", "fusion", "bossa nova", "dance pop", "disco", "reggae"];

let moods = ["calm", "cheerful", "dreamy", "excited", "energetic", "mellow", "optimistic", "angry", "annoyed", "depressed", "frustrated", "gloomy", "irritated", "restless", "tense", "unsure"];

let keys = ["A", "a", "Bb", "bb", "B", "b", "C", "c", "Db", "c#", "D", "d", "Eb", "eb", "E", "e", "F", "f", "F#", "f#", "G", "g", "Ab", "G#", "dorian", "phyrigian", "lydian", "mixolydian", "aeolian", "locrian", "whole-tone", "octatonic", "12-tone serial"];

let styleChoice;
let moodChoice;
let keyChoice;
function musicChoose() {
  styleChoice = styles[Math.floor(Math.random() * (Math.floor(styles.length - 1)))];
  moodChoice = moods[Math.floor(Math.random() * (Math.floor(moods.length - 1)))];
  keyChoice = keys[Math.floor(Math.random() * (Math.floor(keys.length - 1)))];
}

$(document).ready(function(){
  $("#generate").click(function(){
    musicChoose();
    $("#genre").text(styleChoice);
    $("#mood").text(moodChoice);
    $("#key").text(keyChoice);
  });
});