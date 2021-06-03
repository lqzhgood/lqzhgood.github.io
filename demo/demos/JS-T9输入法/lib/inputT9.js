 $(function () {
     var pyT9 = {};
     var keyAll = [];
     for (key in pinyin_tbl) {
         keyAll.push(key);
     }
     $.each(keyAll, function (index, value) {
         if (index == 0) {
             pyT9[value] = pinyin_tbl[value];
         } else {
             var oldkey = keyAll[index - 1].substring(0, 1);
             var newkey = value.substring(0, 1);
             if (oldkey == newkey) {
                 pyT9[oldkey] = pyT9[oldkey].concat(pinyin_tbl[value]);
             } else {
                 pyT9[newkey] = pinyin_tbl[value];
             }
         }
     });
     //     console.log(pyT9);

     dump(pyT9);

     function dump(myObject) {
         var s = "";

         for (var property in myObject) {
             var z = [];
             for (var i = 0; i < myObject[property].length; i++) {
                 z.push("'" + myObject[property][i] + "'");
             }
             s = s + "<br> " + property + ": " + "[" + z + "],";
         }
         $("div").html(s);
     }
 })