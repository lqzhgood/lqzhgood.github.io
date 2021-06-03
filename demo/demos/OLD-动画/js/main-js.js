var clix = {
    head: 0,
    eyes: 0,
    nose: 0,
    mouth: 0
};

var face = document.querySelectorAll(".face");
window.onload = function () {

    for (var i = 0; i < face.length; i++) {
        face[i].onclick = function () {
            moveObj(this, "left", "-367");
        }
    }

    document.getElementById("btnRandom").onclick = function () {
        for (j in clix) {
            var num = Math.floor(Math.random() * 10);

            //防止随机后和当前相同 画面不动
            //            var k = true;
            //            while (k) {
            //                k = false;
            //                if (clix[j] == (num + 1)) {
            //                    k = true;
            //                }
            //                if (clix[j] == 0) {
            //                    if (num == 9) {
            //                        k = true;
            //                    }
            //                }
            //                if (k) {
            //                    num = Math.floor(Math.random() * 10);
            //                }
            //            }

            while ((clix[j] == (num + 1)) || ((clix[j] == 0) && (num == 9))) {
                num = Math.floor(Math.random() * 10);
            }

            clix[j] = num;
        }

        for (var i = 0; i < face.length; i++) {
            moveObj(face[i], "left", "-367");
        }
    }

    document.getElementById("btnReset").onclick = function () {
        clix = {
            head: -1,
            eyes: -1,
            nose: -1,
            mouth: -1
        };
        //        alert(clix.head + "" + clix.eyes + clix.nose + clix.nose);
        for (var i = 0; i < face.length; i++) {
            moveObj(face[i], "left", "-367");
        }
    }
}

function moveObj(obj, att, target) {
    if (clix[obj.id] < 9) {
        clix[obj.id]++;
    } else {
        clix[obj.id] = 0;
    }
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leftValue = parseInt(getComputedStyle(obj, false)[att]);
        var speed = (target * clix[obj.id] - leftValue) / 10;
        if (speed > 0) {
            speed = Math.ceil(speed);
        } else {
            speed = Math.floor(speed);
        }
        document.title = speed;
        if (leftValue != target * clix) {
            if (leftValue != target * clix[obj.id]) {
                obj.style.left = leftValue + speed + "px";
            } else {
                clearInterval(obj.timer);
            }
        }
    }, 50)
}