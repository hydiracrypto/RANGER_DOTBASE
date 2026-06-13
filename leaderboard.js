async function showLeaderboard(){

const { data,error } =
await supabaseClient
.from("leaderboard")
.select("*")
.order("score",{ascending:false})
.limit(10);

if(error){
console.error(error);
return;
}

const panel =
document.getElementById(
"leaderboard-panel"
);

const list =
document.getElementById(
"leaderboard-list"
);

panel.style.display="block";

list.innerHTML =
(data||[])
.map((row,index)=>
`<div>#${index+1} ${
   row.username ||
   row.wallet ||
   "Player"
 } - ${row.score}</div>`
)
.join("");

}

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
