document.write("問1");
document.write("<br>");
function en(han){
    return han*han*3.14
}
document.write(en(5));
document.write("<br>");
document.write(en(7));
document.write("<br>");
document.write(en(10));
document.write("<br>");
document.write("<br>");

document.write("問2");
document.write("<br>");
function cost(dai,syou){
    return dai*500+syou*200
}
document.write("Aグループは"+cost(2,4)+"円です。");
document.write("Bグループは"+cost(1,5)+"円です。");
document.write("Cグループは"+cost(3,7)+"円です。");