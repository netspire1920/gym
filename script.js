
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

document.querySelector("#h123").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#page1"));
})


document.querySelector("#a123").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#page2"));
})


document.querySelector("#s123").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#page3"));
})


document.querySelector("#m123").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#page4"));
})

document.querySelector("#c123").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#contact"));
})


document.querySelector("#footer").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#page1"));
})


document.querySelector("#h1234").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#page1"));
})


document.querySelector("#a1234").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#page2"));
})


document.querySelector("#s1234").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#page3"));
})


document.querySelector("#m1234").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#page4"));
})

document.querySelector("#c1234").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#contact"));
})



document.querySelector("#pn1").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#contact"));
})

document.querySelector("#pn12").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#contact"));
})


document.querySelector("#pn123").addEventListener("click", () =>{
    scroll.scrollTo(document.querySelector("#contact"));
})


