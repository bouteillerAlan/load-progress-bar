function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    "color": document.querySelector("#color").value,
    "width": document.querySelector("#width").value,
    "place": document.querySelector("#place").value,
    "smooth": document.querySelector("#smooth").value
  });
}

function restoreOptions() {

  function updateSettings(result) {
    document.querySelector("#color").value = result.color;
    document.querySelector("#width").value = result.width;
    document.querySelector("#place").value = result.place;
    document.querySelector("#smooth").value = result.smooth;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  browser.storage.local.get({
      color: "#FF0000",
      width: "2",
      place: "top",
      smooth: "yes"
  }).then(updateSettings, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.querySelectorAll("select").forEach((i) => i.addEventListener("change", saveOptions));
document.querySelectorAll("input").forEach((i) => i.addEventListener("change", saveOptions));
