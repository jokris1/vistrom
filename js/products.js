const products = {
    prepareProduct(i) {
        let news = document.getElementsByClassName("display-news")[0];
        let logo = document.getElementsByClassName("display-logo-img")[0];
        let info = document.getElementsByClassName("display-info")[0];
        let design = document.getElementsByClassName("display-design")[0];
        let price = document.getElementsByClassName("display-price")[0];
        let sizes = document.getElementsByClassName("display-sizes")[0];
        let article = document.getElementsByClassName("display-article-bold")[0];
        let description = document.getElementsByClassName("display-description")[0];
        let sizeInfo = document.getElementsByClassName("display-sizeInfo")[0];
        let laundry = document.getElementsByClassName("display-laundry")[0];
        let shipping = document.getElementsByClassName("display-shipping")[0];

        const products = [
            {
                new: true,
                image: "/images/hackett.webp",
                info: "Hacker garment Dyed Oxford",
                design: "Fit Shirt White",
                price: 999,
                sizes: ["S", "M", "L"],
                article: "HM3049975AL",
                description: "Detta är lite text som berättar om produkten",
                sizeInfo: "Lite info om passform",
                laundry: "Lite tvätt och skötselråd",
                shippingReturns: "Lite info om leverans och retur"
            },
        ]

        if (products[i].new) {
            news.innerText = "NYHET";
        }

        logo.setAttribute("src", products[i].image);
        info.innerText = products[i].info;
        design.innerText = products[i].design;
        price.innerText = `${products[i].price} kr`;
        
        for (const size of products[i].sizes) {
            let btn = document.createElement("button");
            btn.setAttribute("content", size);
            btn.textContent = size;
            btn.setAttribute("class", `size size-${size}`)

            sizes.appendChild(btn)
        }

        article.innerText = products[i].article;
        description.innerText = products[i].description;
        sizeInfo.innerText = products[i].sizeInfo;
        laundry.innerText = products[i].laundry;
        shipping.innerText = products[i].shipping;



    }

}

export default products;