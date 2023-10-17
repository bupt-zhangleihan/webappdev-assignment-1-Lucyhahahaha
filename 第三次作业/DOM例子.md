DOM元素接口是一种用于访问和操作HTML和XML文档的API。
它将文档表示为一个树形结构，其中每个节点都是一个对象，每个对象都代表文档中的一个元素、属性或文本。通过使用DOM元素接口，可以轻松地访问和修改文档的内容和结构。

以下是一个使用DOM元素接口的示例：

```html
<!DOCTYPE html>
<html>

<head>
    <title>DOM Element Interface Example</title>
</head>

<body>
    <h1 id="title">Hello World!</h1>
    <p class="content">This is a paragraph.</p>

    <script>
        // 获取标题元素
        var title = document.getElementById("title");
        console.log(title.innerHTML); // 输出：Hello World!

        // 获取段落元素
        var content = document.getElementsByClassName("content")[0];
        console.log(content.innerHTML); // 输出：This is a paragraph.

        // 修改标题元素
        title.innerHTML = "Hello JavaScript!";
        console.log(title.innerHTML); // 输出：Hello JavaScript!

        // 创建新元素
        var newElement = document.createElement("p");
        newElement.innerHTML = "This is a new paragraph.";
        document.body.appendChild(newElement);
    </script>
</body>

</html>
```

在上面的示例中，我们使用了`document.getElementById()`和`document.getElementsByClassName()`方法来获取页面中的元素。
然后，我们使用`innerHTML`属性来获取或修改元素的内容。
最后，我们使用`document.createElement()`方法创建了一个新的段落元素，并使用`appendChild()`方法将其添加到文档中。