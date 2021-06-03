$(document).ready(function () {
    var stickiesArray = getstickArray();
    for (var i = 0; i < stickiesArray.length; i++) {
        var localKey = stickiesArray[i];
        var localValue = JSON.parse(localStorage[localKey]);
        addStickyToDOM(localKey, localValue);
    }

    $("#add_button").click(createSticky);
    $("#clean_button").click(function () {
        localStorage.clear();
        $("#stickies").children().remove();
    });


    function createSticky() {
        var value = $("#note_text").val();
        var color = $("#note_color").val();
        var valueObj = {
            value: value
            , color: color
        }
        var timer = new Date().getTime();
        var key = "sticky_" + timer;
        stickiesArray = getstickArray();
        stickiesArray.push(key);
        localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
        localStorage.setItem(key, JSON.stringify(valueObj));
        addStickyToDOM(key, valueObj);
    }

    function addStickyToDOM(key, value) {
        var spanObj = $("<span>").attr("class", "sticky").text(value.value);
        var liObj = $("<li>").attr("id", key).css("background-color", value["color"]);
        liObj.click(function () {
            var id = event.target.id;
            if (event.target.tagName.toLowerCase() == "span") {
                id = event.target.parentNode.id;
            }
            $("#" + id).remove();
            localStorage.removeItem(id);
            var stickiesArray = getstickArray();
            if (stickiesArray) {
                for (var i = 0; i < stickiesArray.length; i++) {
                    if (stickiesArray[i] == id) {
                        stickiesArray.splice(i, 1);
                    }
                }
            }
            localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
        });
        $("#stickies").append(liObj.append(spanObj));
    }

    function getstickArray() {
        var stickiesArray = localStorage["stickiesArray"];
        if (!stickiesArray) {
            stickiesArray = [];
            localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
        } else {
            stickiesArray = JSON.parse(stickiesArray);
        }
        return stickiesArray;
    }

});