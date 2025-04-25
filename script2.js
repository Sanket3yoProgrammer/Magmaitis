gsap.registerPlugin(ScrollTrigger);

function page8_vid() {

    ScrollTrigger.create({
        trigger: "#page8",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `250% top`,
        });

        gsap.fromTo(
            "#page8 > video",
            { y: 200, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: "#page8",
                scroller: "#main",
                start: "top top",
                end: "200% top",
                scrub: true,
                // markers: true, 
              },
            }
          );
}
page8_vid();


// gsap.from("#page8>button", {
//     y: 90,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: "#page8",
//         scroller: "#main",
//         start: "top 80%",
//         end: "200% top",
//         scrub: true,
//         // markers: true, 
//     },
// })

gsap.fromTo(
    "#page8-bottom button",
    { y: 200, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#page8",
        scroller: "#main",
        start: "top top",
        end: "200% top",
        scrub: true,
        // markers: true
      }
    }
  );
  



  function animateHeading_page8() {
    const heading = document.querySelector(".animateHeading_page8");
    const text = heading.textContent;
    heading.innerHTML = "";
  
    // Wrap every letter in a span with fixed tilt
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.transform = `rotate(60deg)`; // fixed tilt for all letters
      heading.appendChild(span);
    });
  
    // Animate the entire heading up (no rotate here)
    gsap.fromTo(
      heading,
      { y: 160 },
      {
        y: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#page8",
          scroller: "#main",
          start: "top top",
          end: "200% top",
          scrub: true,
        },
      }
    );
  
    // Animate each letter's rotation (uniformly from 20deg → 0deg)
    gsap.to(".animateHeading_page8 span", {
      rotate: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#page8",
        scroller: "#main",
        start: "top top",
        end: "200% top",
        scrub: true,
      },
    });
  }
  
  animateHeading_page8();
  
  
  
  function animateHeading_page9() {

    // ScrollTrigger.create({
    //   trigger: "#page9",
    //   pin: true,
    //   scroller: `#main`,
    //   start: `top top`,
    //   end: `100% top`,
    //   });

    const headings = document.querySelectorAll(".animateHeading_page9");
  
    headings.forEach((heading, index) => {
      const text = heading.textContent;
      heading.innerHTML = "";
  
      // Wrap each character in a span
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char; //  non-breaking space
        span.style.display = "inline-block";
        span.style.transform = `rotate(60deg)`;
        heading.appendChild(span);
      });
      
  
      // Animate heading moving up
      gsap.fromTo(
        heading,
        { y: 200 },
        {
          y: 0,
          // duration: 1,
          // stagger: 0.05,
          ease: "power1.out",
          
          scrollTrigger: {
            trigger: "#page9",
            scroller: "#main",
            start: "top bottom",
            end: "bottom 70%",
            scrub: .1,
            once: true,
          },
        }
      );
    });
  
    // Animate rotation for all spans inside headings
    gsap.to(".animateHeading_page9 span", {
      rotate: 0,
      duration: 1,

      ease: "power1.out",
      scrollTrigger: {
        trigger: "#page9",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 50%",
        scrub: .1,
        once: true,

      },
    });
  }
  
  animateHeading_page9();
  








  gsap.from(".right10-inner-1", {
  y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".right10-inner-1",
        scroller: "#main",
        start:"top bottom",
        end:"top 50%",
        scrub: true,
        // markers: true, 
    },
  })

  gsap.from(".right10-inner-2", {
  y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".right10-inner-2",
        scroller: "#main",
        start:"top bottom",
        end:"top 50%",
        scrub: true,
        // markers: true, 
    },
  })
  gsap.from(".right10-inner-3", {
  y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".right10-inner-3",
        scroller: "#main",
        start:"top bottom",
        end:"top 50%",
        scrub: true,
        // markers: true, 
    },
  })





  document.querySelectorAll(".page11-inner").forEach((elem, index) => {
    gsap.from(elem, {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: elem, // trigger each element individually
        scroller: "#main",
        start: "top 80%", // adjust this for when you want it to start
        end: "top 30%", // optional, you can change or remove
        scrub: 0.8,
        // once: true,
        // markers: true,
      }
    });
  });
  

  ScrollTrigger.create({
    trigger: "#page11",
    pin: true,
    scroller: `#main`,
    start: `top -47%`,
    end: `100% top`,
    });


    function menubtn_color_change() {
      const menuBtn = document.getElementById('menu-btn');
      const menuLines = document.querySelectorAll('.menuline');
      const whiteSection = document.querySelector('#page11');
    
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // 💙 Blue mode
              menuLines.forEach(line => {
                line.style.backgroundColor = '#4771f1';
              });
              menuBtn.style.borderColor = '#4771f1';
            } else {
              // 🤍 White mode
              menuLines.forEach(line => {
                line.style.backgroundColor = 'white';
              });
              menuBtn.style.borderColor = 'rgba(255, 255, 255, 0.377)';
            }
          });
        },
        {
          threshold: 0.1, // Detect when even 10% of the section is in view
          rootMargin: '0px 0px -20% 0px' // Fires earlier as you scroll in
        }
      );
    
      observer.observe(whiteSection);
    }
    
    menubtn_color_change();
    




function animateHeading_page11() {
  const heading = document.querySelector(".animateHeading_page11");
  const text = heading.textContent;
  heading.innerHTML = "";

  const letters = text.split("");
  const spans = [];

  // Create spans with increasing Y and initial rotation
  letters.forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    span.style.transform = `translateY(${120 - i * 2}px) rotate(20deg)`; // Start lower for wave
    heading.appendChild(span);
    spans.push(span);
  });

  // Animate letters up with delay for wave effect
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".animateHeading_page11",
      scroller: "#main", // Adjust this if needed
      start: "top 80%",
      end: "top 50%",
      scrub: 0.5,
    },
  });

  spans.forEach((span, i) => {
    tl.to(span, {
      y: 0,
      rotate: 0,
      ease: "power2.out",
    }, i * 0.05); // Small delay for wave
  });
}

animateHeading_page11();












