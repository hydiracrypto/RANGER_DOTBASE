window.RangerScore = {
  score:0,
  highScore:0
};

setInterval(()=>{

  const text =
    document.body.innerText;

  const match =
    text.match(/Score\s*:?(\d+)/i);

  if(match){

    RangerScore.score =
      parseInt(match[1]);

    if(
      RangerScore.score >
      RangerScore.highScore
    ){
      RangerScore.highScore =
        RangerScore.score;
    }

  }

},500);