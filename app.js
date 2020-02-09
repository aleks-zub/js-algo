function writeAlgoDemo1() {
    var side_a = Math.random() * 10 + 5;
    var side_b = Math.random() * 10 + 5;
    document.write("Side a=" + side_a + "Side b=" + side_b);
    document.write("Объем куба" + side_a * side_a * side_a);
    document.write("Плошадь квадрата" + side_a * side_a);
    document.write("Плошадь прямоугольника" + side_a * side_b);
}

function writeAlgoDemo2() {
    var side_a = Math.random() * 10 + 5;
    var side_b = Math.random() * 10 + 5;
    document.write("<p>Side a=" + side_a + "</p><p>Side b=" + side_b + "</p>");
    document.write("<p>Площадь прямоугольного треугольника" + side_a * side_b / 2 + "</p>");

}