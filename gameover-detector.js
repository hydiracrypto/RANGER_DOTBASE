setInterval(()=>{

  const text =
    document.body.innerText;

  const isGameOver =
    text.includes("GAME OVER");

  if(
    isGameOver &&
    !window.scoreSubmitted
  ){

    window.scoreSubmitted = true;

    saveLeaderboardScore(
      RangerScore.highScore
    );

  }

},1000);