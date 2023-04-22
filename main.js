import { home } from "./modules/home.js";

// import { navMain } from "./modules/navMain.js";

(function () {

    window.rootElement = document.getElementsByClassName("root")[0];
    // MAIN (ALL PAGES)
    window.main = document.createElement("main");
    window.rootElement.appendChild(main);
    window.main.className = "main";

    // HEADER (ALL PAGES)
    window.header = document.createElement("header");
    window.main.appendChild(header);
    window.header.className = "header"
        // top header text
        window.topInfo = document.createElement("article");
        window.header.appendChild(topInfo);
        topInfo.className = "topInfo";
        // main nav
        window.navMain = document.createElement("nav");
        window.header.appendChild(navMain);
        window.navMain.className = "navMain"
        // logo
        window.logo = document.createElement("figure");
        window.header.appendChild(logo);
        window.logo.className = "logo"
        // basket nav
        window.navBasket = document.createElement("nav");
        window.header.appendChild(navBasket);
        window.navBasket.className = "navBasket";

    // CONTENT CHANGING WHEN PAGES LOADS
    window.content = document.createElement("section");
    window.main.appendChild(content);
    window.content.className = "content";


        // primary article (homepage only)
        window.articlePrimary = document.createElement("article");
        window.content.appendChild(articlePrimary);
        window.articlePrimary.className = "articlePrimary";
            // carousel images (big, left)
            window.carouselPic = document.createElement("figure");
            window.articlePrimary.appendChild(carouselPic);
            window.carouselPic.className = "carouselPic";
            // carousel info (right)
            window.carouselInfo = document.createElement("div");
            window.articlePrimary.appendChild(carouselInfo);
            window.carouselInfo.className = "carouselInfo";
    
        // secondary article (homepage only)
        window.articleSecondary = document.createElement("article");
        window.main.appendChild(articleSecondary);
        window.articleSecondary.className = "articleSecondary";
            // more from...
            window.more = document.createElement("details")
            window.articleSecondary.appendChild(more);
            window.more.className = "more";
            // see all
            window.seeAll = document.createElement("details");
            window.articleSecondary.appendChild(seeAll);
            window.seeAll.className = "seeAll";

        // communication (homepage only)
        window.communication = document.createElement("section");
        window.main.appendChild(communication);
        window.communication.className = "communication";
            // mail list
            window.mailList = document.createElement("article");
            window.communication.appendChild(mailList);
            window.mailList.className = "mailList";
            // social media
            window.social = document.createElement("article");
            window.communication.appendChild(social);
            window.social.className = "social";

    // FOOTER (ALL PAGES)
    window.footer = document.createElement("footer");
    window.main.appendChild(footer);
    window.footer.className = "footer";
        // shop
        window.shop = document.createElement("nav");
        window.footer.appendChild(shop);
        window.shop.className = "shop";
        // customer service
        window.service = document.createElement("nav");
        window.main.appendChild(service);
        window.service.className = "service";
        // contact
        window.contact = document.createElement("nav");
        window.footer.appendChild(contact);
        window.contact.className = "contact";
        // adress
        window.adress = document.createElement("nav");
        window.footer.appendChild(adress);
        window.adress.className = "adress";
    // home.showHome();
})();