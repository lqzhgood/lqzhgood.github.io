export default time =>{
    if (time){
        var D = new Date();
        D.setTime(time);

        var y = D.getFullYear();
        var m = D.getMonth() +1 ;
        var d = D.getDay();

        var h = D.getHours();
        var mm = D.getMinutes();
        var s = D.getSeconds();

        return `${y}-${m}-${d} ${h}:${mm}:${s}`
    }
}
