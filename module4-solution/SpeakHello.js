(function(window){
const helloSpeaker = {};
const speakWord = "Hello";
helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
};
window.helloSpeaker = helloSpeaker;
})(window);
