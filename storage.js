var storage = new function () {
    this.product = ["product1", "product 2", "product3"];

    this.display = function () {
        var element = document.getElementById("productDisplay");
        var content = "";
        if (this.product.length > 0) {
            for (i = 0; i < this.product.length; i++) {
                content += "<tr>";
                content += "<td>" + this.product[i] + "</td>";
                content += "<td><button onclick = 'storage.edit("+ i + ")'>Edit</button></td>"
                content += "<td><button onclick = 'storage.delete(" + i + ")'>Delete</button></td>"
                content += "<tr>"
            }
        }
        element.innerHTML = content;
    }

    this.add = function () {
        var element = document.getElementById("productAdd");
        var product = element.value;
        if (product) {
            this.product.push(product.trim());
            this.display();
            product = "";
            console.log(this.product);
        }
    }

    this.edit = function (productIndex) {
        document.getElementById("editArea").style.display = "block";
        var element = document.getElementById("editProduct");
        element.value = this.product[productIndex];
        that = this;
        document.getElementById("editSave").onsubmit = function () {
            that.product.splice(productIndex,1,element.value);
            that.display();
            that.hideEditArea();
        }
    }
    this.hideEditArea = function () {
        document.getElementById("editArea").style.display = "none";
    }
    this.delete = function (productIndex) {
        this.product.splice(productIndex,1);
        this.display();
    }
}
storage.display ();