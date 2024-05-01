
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
    scroll.scrollTo(document.querySelector("#contact"));
})

