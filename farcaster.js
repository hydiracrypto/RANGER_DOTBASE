window.currentFID = null;
window.currentUsername = null;

async function loginFarcaster() {

try {

```
if (!window.farcasterSDK) {

  alert("Farcaster SDK belum dimuat");

  return;
}

try {

  if (
    window.farcasterSDK.actions &&
    window.farcasterSDK.actions.ready
  ) {

    await window.farcasterSDK.actions.ready();

  }

} catch (e) {
  console.log("SDK ready skipped");
}

const context =
  await window.farcasterSDK.context;

alert(
  JSON.stringify(
    context,
    null,
    2
  )
);

console.log(
  "Farcaster Context:",
  context
);

console.log("Farcaster Context:", context);

if (
  !context ||
  !context.user
) {

  alert(
    "Game harus dibuka dari Farcaster Mini App"
  );

  return;
}

currentFID =
  context.user.fid;

currentUsername =
  context.user.username;

localStorage.setItem(
  "fid",
  currentFID
);

localStorage.setItem(
  "username",
  currentUsername
);

const status =
  document.getElementById(
    "farcaster-status"
  );

if(status){

  status.innerText =
    currentUsername;

}

alert(
  "Login berhasil: " +
  currentUsername
);
```

} catch (err) {

```
console.error(err);

alert(
  "Farcaster login gagal. Lihat Console."
);
```

}

}
