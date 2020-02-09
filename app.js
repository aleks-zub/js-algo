function writeAlgoDemo1() {
    var side_a = Math.random() * 10 + 5;
    var side_b = Math.random() * 10 + 5;
    document.write("<p>Side a=" + side_a + "</p><p>Side b=" + side_b);
    document.write("<p>Объем куба" + side_a * side_a * side_a + "</p>");
    document.write("<p>Плошадь квадрата" + side_a * side_a + "</p>");
    document.write("<p>Плошадь прямоугольника" + side_a * side_b + "</p>");
}

function writeAlgoDemo2() {
    var side_a = Math.random() * 10 + 5;
    var side_b = Math.random() * 10 + 5;
    document.write("<p>Side a=" + side_a + "</p><p>Side b=" + side_b + "</p>");
    document.write("<p>Площадь прямоугольного треугольника" + side_a * side_b / 2 + "</p>");

}

function writeAlgoDemo3() {
    var radius = Math.random() * 10 + 5;
    var square = Math.PI * radius * radius;
    document.write("<p>Radius= " + radius + "</p>");
    document.write("<p>Площадь круга" + square + "</p>");
}