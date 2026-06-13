
(function(){
const ui=document.createElement('div');
ui.style='position:fixed;top:10px;right:10px;z-index:99999;background:#000c;color:#fff;padding:8px;border-radius:8px';
ui.innerHTML='<button id=w>Wallet</button> <button id=f>Farcaster</button> <button id=l>Leaderboard</button><div id=o></div>';
document.addEventListener('DOMContentLoaded',()=>document.body.appendChild(ui));
window.connectWallet=async()=>{if(window.ethereum){let a=await ethereum.request({method:'eth_requestAccounts'});localStorage.wallet=a[0];o.innerText=a[0];}};
document.addEventListener('click',e=>{if(e.target.id==='w')connectWallet(); if(e.target.id==='l')showLB();});
async function showLB(){try{const s=supabase.createClient(RANGERCFG.url,RANGERCFG.key);let {data}=await s.from('leaderboard').select('*').order('score',{ascending:false}).limit(10); alert((data||[]).map((x,i)=>`${i+1}. ${x.username||x.wallet||'player'} ${x.score}`).join('\n'));}catch(err){alert(err)}}
window.saveLeaderboardScore=async function(score){
 const s=supabase.createClient(RANGERCFG.url,RANGERCFG.key);
 await s.from('leaderboard').insert({wallet:localStorage.wallet||null,score:score});
}
})();
