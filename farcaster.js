window.currentFID = null;
window.currentUsername = null;

async function loginFarcaster() {

  try {

    const user =
      await window.farcasterSDK.context;

    if (!user || !user.user) {

      alert(
        "Buka game dari Farcaster"
      );

      return;
    }

    currentFID =
      user.user.fid;

    currentUsername =
      user.user.username;

    localStorage.setItem(
      "fid",
      currentFID
    );

    localStorage.setItem(
      "username",
      currentUsername
    );

    document.getElementById(
      "farcaster-status"
    ).innerText =
      currentUsername;

  } catch (e) {

    console.error(e);

  }

}