window.scoreSubmitted = false;

async function saveLeaderboardScore(score){

  try{

    await supabaseClient
      .from("leaderboard")
      .insert({
        wallet: currentWallet,
        username: currentUsername || "",
        fid: currentFID || null,
        score: score
      });

  }catch(err){
    console.error(err);
  }

}