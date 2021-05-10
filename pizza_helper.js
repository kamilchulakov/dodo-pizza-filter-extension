// document.getElementById('pizzas').remove();
// document.getElementById("snacks").remove();
// document.getElementById("drinks").remove();
// document.getElementById("desserts").remove();
// document.getElementById("other").remove();
// var list = document.getElementsByClassName("sc-814yrq-0 gMHVlO")
// for (var i = 0; i < list.length; i++) {
//     var el = list[0];
//     el.parentNode.removeChild(el);
// }
// list = document.getElementsByClassName("sc-1x0pa1d-0 hJpFjQ")
// for (var i = 0; i < list.length; i++) {
//     var el = list[0];
//     el.parentNode.removeChild(el);
// }
// var ingredient = "соус альфредо";
//
// var list = document.getElementsByClassName("sc-1x0pa1d-3 jFTBFr")
// for (var i = 0; i < list.length; i++) {
//     var el = list[i];
//     if (el.firstChild.textContent.toLowerCase().includes(ingredient)) {
//         el.parentNode.removeChild(el);
//     }
// }

function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {
    let ingredient = "";
    if (item.ingredient) {
        ingredient = item.ingredient;
        var list = document.getElementsByClassName("sc-1x0pa1d-3 jFTBFr")
        if (list.length > 0) {
            for (var i = 0; i < list.length; i++) {
                var el = list[i];
                if (el.firstChild.textContent.toLowerCase().includes(ingredient)) {
                    el.parentNode.removeChild(el);
                }
            }
            for (var i = 0; i < list.length; i++) {
                var el = list[i];
                if (el.firstChild.textContent.toLowerCase().includes(ingredient)) {
                    el.parentNode.removeChild(el);
                }
            }
        }
    }
}

let getting = chrome.storage.sync.get("ingredient", function(result) {
    console.log('Value currently is ' + result.key);});
getting.then(onGot, onError);
