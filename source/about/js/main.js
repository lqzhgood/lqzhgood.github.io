window.onload = function () {
    $("#wrap").appendTo("body");

    let lmsArray = [];
    let lmsArrayTure = "73&83&71&78&69&77&85&73&76";
    let timer;

    $("body").keyup((e) => {
        clearTimeout(timer);

        let key = e.which;
        if (key == 27 && $("#heart").css("opacity") == 1) {
            $(".colorEgg").animate({ opacity: 0 }, 1000);
            $(".colorEgg").hide(1000);
        }
        lmsArray.unshift(key);

        let lmsStr = lmsArray.join("&");
        if (lmsStr.indexOf(lmsArrayTure) != -1) {
            lmsArray = [];
            $(".colorEgg").css("display", "block");
            $("#wrap").animate(
                {
                    opacity: 0.8,
                },
                1000
            );
            $("#heart").animate(
                {
                    opacity: 1,
                },
                1000
            );
        }

        timer = setTimeout(() => {
            lmsArray = [];
        }, 2000);

        console.log(lmsArray);
    });
};
