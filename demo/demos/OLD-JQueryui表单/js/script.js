$(document).ready(function () {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true
    }); //日期选择器

    $("#type_select").buttonset(); //单选

    slidefn("#distance", "#slide_dist", 0, 0, 500, 10);
    slidefn("#weight", "#slide_weight", 0, 0, 5000, 5);
    slidefn("#height", "#slide_height", 0, 0, 20, 1);
    slidefn("#latitude,#longitude", "#slide_lat,#slide_long", 0, -90, 90, 0.00001);
    slidefn("#red_val,#blue_val,#green_val", "#red,#blue,#green", 127, 0, 255, 1);
    $("#red, #green, #blue").slider({
        range: "min",
        value: 127
    });

    $("button:submit").button();

    function slidefn(inputObj, divObj, value, min, max, step) {
        $(divObj).each(function (index) {
            $($(divObj)[index]).slider({
                value: value,
                min: min,
                max: max,
                step: step,
                slide: function (event, ui) {
                    addValue(event, ui, inputObj, divObj, index) //*！方法传参
                },
                change: function (event, ui) {
                    addValue(event, ui, inputObj, divObj, index)
                }
            });
        });

        $(inputObj).each(function (index) {
            $($(inputObj)[index]).val($($(divObj)[index]).slider("value"));
        });
    }

    function addValue(event, ui, inputObj, divObj, index) {
        $($(inputObj)[index]).val(ui.value);

        if ($(divObj)[index].id == "red" || $(divObj)[index].id == "blue" || $(divObj)[index].id == "green") {
            var red = $("#red_val").val();
            var blue = $("#blue_val").val();
            var green = $("#green_val").val();
            var rgb = "rgb(" + red + "," + green + "," + blue + ")";
            $("#swatch").css("background-color", rgb);
        }
    }
    
});