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

document.getElementById(
"leaderboard-panel"
).style.display="block";

document.getElementById(
"leaderboard-list"
).innerHTML =
(data||[])
.map((row,index)=>
`<div style="padding:6px;border-bottom:1px solid #333">
#${index+1}
${row.username || row.wallet || "Player"}

- ${row.score}

 </div>`
 )
 .join("");
}
