// clicks activate for <a> tags in nav
document.addEventListener("click", (e) => {
    // extract target from object e (e.target)
    const { target } = e;
    // if target is not nav a, break, otherwise call route()
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    route(); // watches URL, calls urlLocationHandler
});


// ROUTES (object with key-value/object pairs)
const routes = {
    404: {
        template: "/templates/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "/templates/index.html",
        title: "HEM",
        description: "Startsida",
    },
    // "/about": {
    //     template: "/templates/about.html",
    //     title: "About Us",
    //     description: "This is the about page",
    // },
    // "/kontakt": {
    //     template: "/templates/contact.html",
    //     title: "Contact Us",
    //     description: "This is the contact page",
    // },
};



const route = (event) => {
    event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
    // window.history.pushState(state, unused, target link); - adds entry to web browser's session history stack
    window.history.pushState({}, "", event.target.href);
    // handle url location
    locationHandler();
};



const locationHandler = async () => {
    const location = window.location.pathname; // get the url path
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    // get the route object (i.e. "/contact") from the urlRoutes object
    const route = routes[location] || routes["404"];
    // get and store html from template
    const html = await fetch(route.template).then((response) => response.text());
    // set div to html
    document.getElementsByClassName("content-main")[0].innerHTML = html;
    // set title of document to route title
    document.title = route.title;
    // set description of document to route description
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};


// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call urlLocationHandler function to handle initial url (otherwise empty start page)
locationHandler();