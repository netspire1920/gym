// // Add a click event listener to the hamburger menu button
// document.querySelector('.navbar-toggler').addEventListener('click', function() {
//     // Toggle the "collapsed" class on the hamburger menu button
//     this.classList.toggle('collapsed');
  
//     // Toggle the "show" class on the navbar collapse element
//     document.querySelector('.navbar-collapse').classList.toggle('show');
  
//     // Toggle the "not-collapsed" class on the hamburger menu button
//     this.classList.toggle('not-collapsed');
//   });


const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
