/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/
//need to combine filters!!! but works
function domainName(url){
    return url.split(/[.//]/).filter(x=>x!='').filter(x=>x.indexOf('http:')).filter(x=>x.indexOf('https:')).filter(x=>x.indexOf('www')).filter((x,i)=>i==0).toString()
}
console.log(domainName('www.xakep.ru'))