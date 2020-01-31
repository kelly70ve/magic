function magic() {
  var answer = ["It is certain.","It is decidedly so.","Without a doubt."," Yes, definitely.","You may rely on it.","As I see it, yes.","Most likely.","Yes.","Signs point to yes.","Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now.","Concentrate and ask again."," Don't count on it."," My reply is no.","My sources say no.","Outlook not so good."," Very doubtful."]
  var randomNum = Math.floor(Math.random() * answer.length);
  var inputVal = document.getElementById("question").value; // validate "?"
  if (inputVal.includes("?")){
  // document.getElementById('').style.diplay = '';
  document.getElementById("message").innerHTML = answer[randomNum];
  document.getElementById("question").value = '';
  } else {
    alert("Make sure to add a ?")
  }
}

function enterPressed(e, textarea){
  var code = (e.keyCode ? e.keyCode : e.which);
  if(code == 13) {
  e.preventDefault(); //code breaks without this
  magic();
  }
}

// This function puts input on focus automatically

window.onload = function() {
  var input = document.getElementById("question").focus();
}

// jquery animation - need to learn jquery

// $("button").click(function()
//     {
//   $("#left-cloud").animate({left: "300px"});
// });



