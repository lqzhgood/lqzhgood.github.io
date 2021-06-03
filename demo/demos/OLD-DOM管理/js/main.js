$(document).ready(function () {
    var v;
    $("button#vegon").click(function () {
        v = true;
        $f = $(".fish").parent().parent().detach();
        $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
        $(".meat").after("<li class='tofu'><em>tofu</em></li>");
        $(".tofu").parent().parent().addClass("veg_leaf");
        $m = $(".meat").detach();

    });
    $("button#restoreMe").click(function () {
        if (v) {
            $(".menu_entrees li").first().before($f);
            $(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
            $(".tofu").each(function (index) {
                $(this).after($m[index]);
            });
            $(".tofu").parent().parent().removeClass("veg_leaf");
            $(".tofu").remove();
            v = false;
        }
    });
});