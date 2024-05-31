// Move an element to the right by 100 pixels over 1 second
// gsap.to(".element1", { duration: 1, x: 100 });

// Fade in an element from opacity 0 to 1 over 2 seconds
gsap.from(".element2", { duration: 2, opacity: 0 });

// Scale an element from 0.5 to 1 over 1.5 seconds
gsap.fromTo(".element3", { scale: 0.5 }, { duration: 1.5, scale: 1 });

// Set an element's rotation to 45 degrees instantly
gsap.set(".element1", { rotation: 45 });


let tl = gsap.timeline();

// Add animations to the timeline
tl.to(".element1", { duration: 1, x: 100 })
    .to(".element2", { duration: 1, y: 100 }, "-=0.5")
    .from(".element3", { duration: 1, opacity: 0 }, "+=0.5");


// // gsap.to(".box", {
// //     scrollTrigger: {
// //         trigger: ".box",
// //         start: "top 80%",
// //         end: "bottom 20%",
// //         scrub: true,
// //         pin: true,
// //         markers: true
// //     },
// //     x: 500,
// //     rotation: 360,
// //     duration: 3
// // });


// Draggable.create(".box", {
//     type: "x,y",
//     bounds: ".container",
//     inertia: true
// });


// // gsap.to(".circle", {
// //     duration: 5,
// //     motionPath: {
// //         path: "#path",
// //         align: "#path",
// //         autoRotate: true
// //     }
// // });

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a ScrollTrigger instance
gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box", // Element that triggers the animation
    start: "top 80%", // Animation starts when the top of .box hits 80% of the viewport height
    end: "bottom 20%", // Animation ends when the bottom of .box hits 20% of the viewport height
    scrub: true, // Smoothly scrubs the animation in sync with scrolling
    pin: true, // Pins the .box in place while the animation is active
    pinSpacing: false, // No additional spacing for the pinned element
    markers: true, // Show start and end markers for debugging
    toggleClass: { targets: ".box", className: "active" }, // Adds 'active' class to .box during animation
    onEnter: () => console.log("Entered!"), // Callback when entering the viewport
    onLeave: () => console.log("Left!"), // Callback when leaving the viewport
    onEnterBack: () => console.log("Entered back!"), // Callback when entering back from bottom
    onLeaveBack: () => console.log("Left back!") // Callback when leaving back from top
  },
  x: 500, // Moves .box 500px to the right
  duration: 3 // Duration of the animation (used when scrub is not enabled)
});
