window.currentWallet = null;

async function connectWallet() {

  if (!window.ethereum) {
    alert("Wallet tidak ditemukan");
    return;
  }

  const accounts =
    await ethereum.request({
      method: "eth_requestAccounts"
    });

  currentWallet = accounts[0];

  localStorage.setItem(
    "wallet",
    currentWallet
  );

  document.getElementById(
    "wallet-status"
  ).innerText =
    currentWallet.substring(0,6) +
    "..." +
    currentWallet.slice(-4);
}