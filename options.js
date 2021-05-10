function saveOptions(e) {
    e.preventDefault();
    chrome.storage.sync.set({
        ingredient: document.querySelector("#ingredient").value
    });
}

function restoreOptions() {

    function setCurrentChoice(result) {
        document.querySelector("#ingredient").value = result.ingredient || "";
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = chrome.storage.sync.get("ingredient", function(result) {
        return result }
    );
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
