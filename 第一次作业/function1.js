class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        var p = 0;
        var s = 0;
        if (a + b < c || a + c < b || b + c < a) { //判断是否能构成三角形
            document.write("不能构成三角形！");
        } else {
            p = (a + b + c) / 2;
            s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            document.write("三角形的面积为：" + s);
            document.write("<br />");
        }
    }
}
var p1 = new Triangle(3, 4, 5);
var p2 = new Triangle(15, 18, 30);


	















