async function showLeaderboard(){

  const { data } =
    await supabaseClient
    .from("leaderboard")
    .select("*")
    .order("score", {
      ascending:false
    })
    .limit(10);

  let html = "";

  data.forEach((row,index)=>{

    html += `
      <div>
      #${index+1}
      ${row.username || row.wallet}
      - ${row.score}
      </div>
    `;

  });

  document.getElementById(
    "leaderboard-list"
  ).innerHTML = html;

}