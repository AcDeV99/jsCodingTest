const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/프로그래머스/인사%20정보%20SPA%20리뉴얼/pages/404.html",
  "/": "/프로그래머스/인사%20정보%20SPA%20리뉴얼/pages/index.html",
  "/about": "/프로그래머스/인사%20정보%20SPA%20리뉴얼/pages/about.html",
  "/lorem": "/프로그래머스/인사%20정보%20SPA%20리뉴얼/pages/lorem.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
