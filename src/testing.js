import { getQueryParams } from './helpers'

function loadPage(href){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

function loadWebsiteManager(website){
  console.log(loadPage('http://www.vg.no/'));
}

if( getQueryParams("website")){
  loadWebsiteManager(getQueryParams("website"));
}

export default test;
