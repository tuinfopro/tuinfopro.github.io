function slideShow(){function b(){a.wrapperObject=document.getElementById(a.wrapperID)?document.getElementById(a.wrapperID):null,a.buttonObject=document.getElementById(a.buttonID)?document.getElementById(a.buttonID):null,a.wrapperObject&&(a.slideImages=a.wrapperObject.querySelectorAll("img")?a.wrapperObject.querySelectorAll("img"):[])}function c(){return a.wrapperObject?!a.slideImages.length&&(a.wrapperObject&&(a.wrapperObject.style.display="none"),a.buttonObject&&(a.buttonObject.style.display="none"),!0):(a.buttonObject&&(a.buttonObject.style.display="none"),!0)}function d(){var b=e(),c=f();a.wrapperObject.style.position="relative",a.wrapperObject.style.overflow="hidden",a.wrapperObject.style.width=b+"px",a.wrapperObject.style.height=c+"px";for(var d=a.slideImages.length,g=0;g<d;g++)a.slideImages[g].style.opacity=0,a.slideImages[g].style.position="absolute",a.slideImages[g].style.top=(c-a.slideImages[g].getBoundingClientRect().height)/2+"px",a.slideImages[g].style.left=(b-a.slideImages[g].getBoundingClientRect().width)/2+"px";a.slideImages[0].style.opacity=1,a.buttonObject&&(a.buttonObject.textContent=a.buttonStopText)}function e(){for(var b=0,c=0,d=a.slideImages.length,e=0;e<d;e++)a.slideImages[e].width>b&&(b=a.slideImages[e].width,c=e);return a.slideImages[c].getBoundingClientRect().width}function f(){for(var b=0,c=0,d=a.slideImages.length,e=0;e<d;e++)a.slideImages[e].height>b&&(b=a.slideImages[e].height,c=e);return a.slideImages[c].getBoundingClientRect().height}function g(){a.slideShowID=setInterval(j,a.slideDelay)}function h(){clearInterval(a.slideShowID)}function i(){a.slideShowRunning?(h(),a.buttonObject&&(a.buttonObject.textContent=a.buttonStartText)):(g(),a.buttonObject&&(a.buttonObject.textContent=a.buttonStopText)),a.slideShowRunning=!a.slideShowRunning}function j(){function h(){d-=f,e+=f,d>=0&&e<=1?(b.style.opacity=d,c.style.opacity=e):(b.style.opacity=0,c.style.opacity=1,clearInterval(g))}var b=a.slideImages[a.slideIndex];++a.slideIndex,a.slideIndex>=a.slideImages.length&&(a.slideIndex=0);var c=a.slideImages[a.slideIndex],d=1,e=0,f=1/a.fadeDelay,g=setInterval(h,a.fadeDelay)}var a={slideDelay:4e3,fadeDelay:35,wrapperID:"slideShowInt",buttonID:"slideShowButton",buttonStartText:"Start Slides",buttonStopText:"Stop Slides",wrapperObject:null,buttonObject:null,slideImages:[],slideShowID:null,slideShowRunning:!0,slideIndex:0};b(),c()||1!=a.slideImages.length&&(d(),a.wrapperObject.addEventListener("click",i,!1),a.buttonObject&&a.buttonObject.addEventListener("click",i,!1),g())}window.addEventListener("load",slideShow,!1);