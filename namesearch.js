/*jshint multistr:true */
var text = "Hey, how are you \
doing? My name is Tara.";
myName = "Tara";
hits = [];

for(var i = 0; i < text.length; i++){
  if(text[i] === myName[0]){
  for(var j = i; j < i + myName.length; j++){
      hits.push(text[j]);
  }
  }  
}
if(hits.length === 0){
    console.log("Your name was not found!");
}
else{
    console.log(hits);
}
