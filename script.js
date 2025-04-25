
function loco(){
  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"), // Target #main
    smooth: true,
  });
  
  // Synchronize Locomotive Scroll with ScrollTrigger
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // Setting up scrollerProxy for GSAP to work with Locomotive Scroll
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // Refresh ScrollTrigger when everything is set
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  
  // Optionally, add a resize listener to keep things working on resize
  window.addEventListener('resize', () => locoScroll.update());
  }
  
  loco();
  
  
  function split_text_to_white(){
  var clutter = "";
  
  document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
      clutter += `<span>${dets}</span>`
  
      document.querySelector("#page2>h1").innerHTML = clutter;
  })
  
  
  gsap.to("#page2>h1>span",{
      scrollTrigger:{
          trigger:`#page2>h1>span`,
          start:`top bottom`,
          end:`top 40%`,
          scroller:`#main`,
          scrub:.5,
          // markers:true,
      },
      stagger:.2,
      color:`#fff`
  })
  }
  split_text_to_white()
  
  
  
  function animate_nav(){
    let lastScroll = 0;
    let navVisible = true;
  
    gsap.registerPlugin(ScrollTrigger);
  
    ScrollTrigger.create({
      trigger: "#page1",
      start: "top top",
      end: "bottom top",
      scroller: "#main",
      onUpdate: (self) => {
        let currentScroll = self.scroll();
        if (currentScroll > lastScroll && navVisible) {
          // Scrolling down - hide nav
          gsap.to("#nav", {
            y: -50,
            duration: 0.8,
            ease: "power2.out"
          });
          navVisible = false;
        } else if (currentScroll < lastScroll && !navVisible) {
          // Scrolling up - show nav
          gsap.to("#nav", {
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          });
          navVisible = true;
        }
        lastScroll = currentScroll;
      }
    });
  };
  
  animate_nav();
  
  
  
  function canvas(){
    const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });
  
  function files(index) {
  var data = ` 
  ./frames00007.png
  ./frames00010.png
  ./frames00013.png
  ./frames00016.png
  ./frames00019.png
  ./frames00022.png
  ./frames00025.png
  ./frames00028.png
  ./frames00031.png
  ./frames00034.png
  ./frames00037.png
  ./frames00040.png
  ./frames00043.png
  ./frames00046.png
  ./frames00049.png
  ./frames00052.png
  ./frames00055.png
  ./frames00058.png
  ./frames00061.png
  ./frames00064.png
  ./frames00067.png
  ./frames00070.png
  ./frames00073.png
  ./frames00076.png
  ./frames00079.png
  ./frames00082.png
  ./frames00085.png
  ./frames00088.png
  ./frames00091.png
  ./frames00094.png
  ./frames00097.png
  ./frames00100.png
  ./frames00103.png
  ./frames00106.png
  ./frames00109.png
  ./frames00112.png
  ./frames00115.png
  ./frames00118.png
  ./frames00121.png
  ./frames00124.png
  ./frames00127.png
  ./frames00130.png
  ./frames00133.png
  ./frames00136.png
  ./frames00139.png
  ./frames00142.png
  ./frames00145.png
  ./frames00148.png
  ./frames00151.png
  ./frames00154.png
  ./frames00157.png
  ./frames00160.png
  ./frames00163.png
  ./frames00166.png
  ./frames00169.png
  ./frames00172.png
  ./frames00175.png
  ./frames00178.png
  ./frames00181.png
  ./frames00184.png
  ./frames00187.png
  ./frames00190.png
  ./frames00193.png
  ./frames00196.png
  ./frames00199.png
  ./frames00202.png
  
  `;
  return data.split("\n")[index];
  }
  
  const frameCount = 66;
  
  const images = [];
  const imageSeq = {
  frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
  }
  
  gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
  scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
  }
  ScrollTrigger.create({
  
  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
  });
  }
  canvas()
  
  
  
  
  
  gsap.from("#nav",{
    scrollTrigger: {
      trigger: "#nav",
      scroller: "#main",
      start: "top 80%",
      end: "top 50%",
    },
    y: -90,
    duration: 1.3,
    ease: "power1.out",
  });
  
  
  gsap.to("#menu-btn", {
    scrollTrigger: {
      trigger: "#menu-btn",
      scroller: "#main",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    },
    y: 0,
    duration: 1.3,
    ease: "power1.out",
  });
  
  
  
  gsap.from("#scroll-btn", {
    y: 90,
    duration: 1.2,
    ease: "power1.out",
  });
  
  gsap.from(".learn-more-btn-wrapper",{
    y: 120,
    duration: 0.6,
    ease: "power1.out",
  })
  
  gsap.to(".learn-more-btn-wrapper",{
    x: 370,
    delay: 0.62,
    duration: 0.8,
    ease: "power1.out",
  })
  
  // function text_reveal_1() {
  
  // }
  // text_reveal_1()
  
  
  
  gsap.from(".bottom-page1-inner>h4", {
    opacity: 0,
    y: 6,
    duration: 1,
    delay: 0.67,
    ease: "power2.out",
  });
  
  gsap.from("#page2>h1", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page2>h3",
      start: "top 90%",
      end: "top 50%",
    },
    duration: 1.2,
    y: 100,
    opacity: 0,
  })
  
  
  
  gsap.from("#page4>h1",{
    scrollTrigger:{
      trigger:"#page4>h1",
      scroller:"#main",
      start:"top bottom",
      end:"top 50%",
    },
    duration:1,
    y:90,
    opacity:0,
  })
  
  
  
  
  
  
  
  
  
  
  
  
  function animateHeading() {
    const heading = document.querySelector(".animated-heading");
  
    // STEP 1: Grab original nodes and split using <br> tags
    const nodes = Array.from(heading.childNodes);
    const lines = [];
    let currentLine = "";
  
    nodes.forEach((node) => {
      if (node.nodeType === 3) {
        // Text node
        currentLine += node.textContent;
      } else if (node.nodeName === "BR") {
        // Line break - push current line
        lines.push(currentLine);
        currentLine = "";
      }
    });
    if (currentLine.trim()) lines.push(currentLine); // push last line
  
    // STEP 2: Create document fragment for performance
    const fragment = document.createDocumentFragment();
  
    lines.forEach((lineText) => {
      const lineSpan = document.createElement("span");
      lineSpan.classList.add("line");
      lineSpan.style.display = "block";
  
      const words = lineText.trim().split(' '); // split line into words
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.whiteSpace = "nowrap";
  
        Array.from(word).forEach((char) => {
          const letterSpan = document.createElement("span");
          letterSpan.classList.add("letter");
          letterSpan.textContent = char;
          wordSpan.appendChild(letterSpan);
        });
  
        lineSpan.appendChild(wordSpan);
  
        if (wordIndex < words.length - 1) {
          // Add space between words
          lineSpan.appendChild(document.createTextNode('\u00A0'));
        }
      });
  
      fragment.appendChild(lineSpan);
    });
  
    // STEP 3: Replace content
    heading.innerHTML = '';
    heading.appendChild(fragment);
  
    // STEP 4: Animate using GSAP
    gsap.set(".letter", {
      opacity: 1,
      y: 100,
      rotate: 20,
    });
  
    document.querySelectorAll(".line").forEach((line, lineIndex) => {
      const letters = line.querySelectorAll(".letter");
  
  
      gsap.to(letters, {
        y: 0,
        rotate: 0,
        ease: "power3.out",
        duration: 1.1,
        delay: lineIndex * 0.3,
        stagger: {
          each: 0.07,
        },
      });
    });
  }
  
  // Run on page load
  window.addEventListener("DOMContentLoaded", animateHeading);
  
  
  
  
  function animatePage4Heading2() {
  
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateHeading(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.9, // Trigger when 80% in view
      }
    );
    
    function animateHeading(heading) {
      const text = heading.dataset.text;
      heading.innerHTML = ''; // Empty to start clean
    
      [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        heading.appendChild(span);
      });
    
      const letters = heading.querySelectorAll('span');
    
      // Initial position: below & hidden
      letters.forEach((letter, i) => {
        const offset = 60 - i * 3;
        gsap.set(letter, {
          y: Math.max(offset, 20),
          opacity: 1,
          visibility: 'hidden',
        });
      });
    
      // Animate into view
      gsap.to(letters, {
        y: 0,
        visibility: 'visible',
        duration: 0.5,
        ease: 'power3.out',
        stagger: {
          each: 0.015,
        },
      });
    }
    
    // Observe
    const h3 = document.querySelector('#animated-h3');
    observer.observe(h3);
    
  
  }
  
  animatePage4Heading2();
  
  
  
  
  
  function split_text_to_white2(){
    var clutter = "";
    
    document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
        clutter += `<span>${dets}</span>`
    
        document.querySelector("#page4>h1").innerHTML = clutter;
    })
    
    
    gsap.to("#page4>h1>span",{
        scrollTrigger:{
            trigger:`#page4>h1>span`,
            start:`top bottom`,
            end:`top 20%`,
            scroller:`#main`,
            scrub:.5,
            // markers:true,
        },
        stagger:.2,
        color:`#fff`
    })
    }
    split_text_to_white2()
  
  
  
  
  
  
  
    function canvas2(){
      const canvas = document.querySelector("#page5>canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    
    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });
    
    function files(index) {
    var data = `
    ./bridges00004.png
    ./bridges00007.png
    ./bridges00010.png
    ./bridges00013.png
    ./bridges00016.png
    ./bridges00019.png
    ./bridges00022.png
    ./bridges00025.png
    ./bridges00028.png
    ./bridges00031.png
    ./bridges00034.png
    ./bridges00037.png
    ./bridges00040.png
    ./bridges00043.png
    ./bridges00046.png
    ./bridges00049.png
    ./bridges00052.png
    ./bridges00055.png
    ./bridges00058.png
    ./bridges00061.png
    ./bridges00064.png
    ./bridges00067.png
    ./bridges00070.png
    ./bridges00073.png
    ./bridges00076.png
    ./bridges00079.png
    ./bridges00082.png
    ./bridges00085.png
    ./bridges00088.png
    ./bridges00091.png
    ./bridges00094.png
    ./bridges00097.png
    ./bridges00100.png
    ./bridges00103.png
    ./bridges00106.png
    ./bridges00109.png
    ./bridges00112.png
    ./bridges00115.png
    ./bridges00118.png
    ./bridges00121.png
    ./bridges00124.png
    ./bridges00127.png
    ./bridges00130.png
    ./bridges00133.png
    ./bridges00136.png
    ./bridges00139.png
    ./bridges00142.png
    ./bridges00145.png
    ./bridges00148.png
    ./bridges00151.png
    ./bridges00154.png
    ./bridges00157.png
    ./bridges00160.png
    ./bridges00163.png
    ./bridges00166.png
    ./bridges00169.png
    ./bridges00172.png
    ./bridges00175.png
    ./bridges00178.png
    ./bridges00181.png
    ./bridges00184.png
    ./bridges00187.png
    ./bridges00190.png
    ./bridges00193.png
    ./bridges00196.png
    ./bridges00199.png
    ./bridges00202.png
    `;
    return data.split("\n")[index];
    }
    
    const frameCount = 67;
    
    const images = [];
    const imageSeq = {
    frame: 1,
    };
    
    for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }
    
    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#page5`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
    });
    
    images[1].onload = render;
    
    function render() {
    scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
    }
    ScrollTrigger.create({
    
    trigger: "#page5",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
    });
    }
    canvas2()
    
  
  
  
  
  
  
    function animatePage4Heading3() {
  
  
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateHeading(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.9, // Trigger when 80% in view
        }
      );
      
      function animateHeading(heading) {
        const text = heading.dataset.text;
        heading.innerHTML = ''; // Empty to start clean
      
        [...text].forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          heading.appendChild(span);
        });
      
        const letters = heading.querySelectorAll('span');
      
        // Initial position: below & hidden
        letters.forEach((letter, i) => {
          const offset = 60 - i * 3;
          gsap.set(letter, {
            y: Math.max(offset, 20),
            opacity: 1,
            visibility: 'hidden',
          });
        });
      
        // Animate into view
        gsap.to(letters, {
          y: 0,
          visibility: 'visible',
          duration: 0.5,
          ease: 'power3.out',
          stagger: {
            each: 0.015,
          },
        });
      }
      
      // Observe
      const h3 = document.querySelector('#animated-h3-2');
      observer.observe(h3);
      
    
    }
    
    animatePage4Heading3();
    
    
    
    
    
    function split_text_to_white3(){
      var clutter = "";
      
      document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
          clutter += `<span>${dets}</span>`
      
          document.querySelector("#page6>h1").innerHTML = clutter;
      })
      
      
      gsap.to("#page6>h1>span",{
          scrollTrigger:{
              trigger:`#page6>h1>span`,
              start:`top bottom`,
              end:`top 40%`,
              scroller:`#main`,
              scrub:.5,
              // markers:true,
          },
          stagger:.2,
          color:`#fff`
      })
      }
      split_text_to_white3()
  
  
  
  
      gsap.from("#page6>h1",{
        scrollTrigger:{
          trigger:"#page6>h1",
          scroller:"#main",
          start:"top bottom",
          end:"top 50%",
          // markers:true,
        },
        duration:1,
        y:90,
        opacity:0,
      })
  
  
  
  
      function canvas3(){
        const canvas = document.querySelector("#page7>canvas");
      const context = canvas.getContext("2d");
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      
      window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
      });
      
      function files(index) {
      var data = `
      
      https://thisismagma.com/assets/home/lore/seq/1.webp?2
      https://thisismagma.com/assets/home/lore/seq/2.webp?2
      https://thisismagma.com/assets/home/lore/seq/3.webp?2
      https://thisismagma.com/assets/home/lore/seq/4.webp?2
      https://thisismagma.com/assets/home/lore/seq/5.webp?2
      https://thisismagma.com/assets/home/lore/seq/6.webp?2
      https://thisismagma.com/assets/home/lore/seq/7.webp?2
      https://thisismagma.com/assets/home/lore/seq/8.webp?2
      https://thisismagma.com/assets/home/lore/seq/9.webp?2
      https://thisismagma.com/assets/home/lore/seq/10.webp?2
      https://thisismagma.com/assets/home/lore/seq/11.webp?2
      https://thisismagma.com/assets/home/lore/seq/12.webp?2
      https://thisismagma.com/assets/home/lore/seq/13.webp?2
      https://thisismagma.com/assets/home/lore/seq/14.webp?2
      https://thisismagma.com/assets/home/lore/seq/15.webp?2
      https://thisismagma.com/assets/home/lore/seq/16.webp?2
      https://thisismagma.com/assets/home/lore/seq/17.webp?2
      https://thisismagma.com/assets/home/lore/seq/18.webp?2
      https://thisismagma.com/assets/home/lore/seq/19.webp?2
      https://thisismagma.com/assets/home/lore/seq/20.webp?2
      https://thisismagma.com/assets/home/lore/seq/21.webp?2
      https://thisismagma.com/assets/home/lore/seq/22.webp?2
      https://thisismagma.com/assets/home/lore/seq/23.webp?2
      https://thisismagma.com/assets/home/lore/seq/24.webp?2
      https://thisismagma.com/assets/home/lore/seq/25.webp?2
      https://thisismagma.com/assets/home/lore/seq/26.webp?2
      https://thisismagma.com/assets/home/lore/seq/27.webp?2
      https://thisismagma.com/assets/home/lore/seq/28.webp?2
      https://thisismagma.com/assets/home/lore/seq/29.webp?2
      https://thisismagma.com/assets/home/lore/seq/30.webp?2
      https://thisismagma.com/assets/home/lore/seq/31.webp?2
      https://thisismagma.com/assets/home/lore/seq/32.webp?2
      https://thisismagma.com/assets/home/lore/seq/33.webp?2
      https://thisismagma.com/assets/home/lore/seq/34.webp?2
      https://thisismagma.com/assets/home/lore/seq/35.webp?2
      https://thisismagma.com/assets/home/lore/seq/36.webp?2
      https://thisismagma.com/assets/home/lore/seq/37.webp?2
      https://thisismagma.com/assets/home/lore/seq/38.webp?2
      https://thisismagma.com/assets/home/lore/seq/39.webp?2
      https://thisismagma.com/assets/home/lore/seq/40.webp?2
      https://thisismagma.com/assets/home/lore/seq/41.webp?2
      https://thisismagma.com/assets/home/lore/seq/42.webp?2
      https://thisismagma.com/assets/home/lore/seq/43.webp?2
      https://thisismagma.com/assets/home/lore/seq/44.webp?2
      https://thisismagma.com/assets/home/lore/seq/45.webp?2
      https://thisismagma.com/assets/home/lore/seq/46.webp?2
      https://thisismagma.com/assets/home/lore/seq/47.webp?2
      https://thisismagma.com/assets/home/lore/seq/48.webp?2
      https://thisismagma.com/assets/home/lore/seq/49.webp?2
      https://thisismagma.com/assets/home/lore/seq/50.webp?2
      https://thisismagma.com/assets/home/lore/seq/51.webp?2
      https://thisismagma.com/assets/home/lore/seq/52.webp?2
      https://thisismagma.com/assets/home/lore/seq/53.webp?2
      https://thisismagma.com/assets/home/lore/seq/54.webp?2
      https://thisismagma.com/assets/home/lore/seq/55.webp?2
      https://thisismagma.com/assets/home/lore/seq/56.webp?2
      https://thisismagma.com/assets/home/lore/seq/57.webp?2
      https://thisismagma.com/assets/home/lore/seq/58.webp?2
      https://thisismagma.com/assets/home/lore/seq/59.webp?2
      https://thisismagma.com/assets/home/lore/seq/60.webp?2
      https://thisismagma.com/assets/home/lore/seq/61.webp?2
      https://thisismagma.com/assets/home/lore/seq/62.webp?2
      https://thisismagma.com/assets/home/lore/seq/63.webp?2
      https://thisismagma.com/assets/home/lore/seq/64.webp?2
      https://thisismagma.com/assets/home/lore/seq/65.webp?2
      https://thisismagma.com/assets/home/lore/seq/66.webp?2
      https://thisismagma.com/assets/home/lore/seq/67.webp?2
      https://thisismagma.com/assets/home/lore/seq/68.webp?2
      https://thisismagma.com/assets/home/lore/seq/69.webp?2
      https://thisismagma.com/assets/home/lore/seq/70.webp?2
      https://thisismagma.com/assets/home/lore/seq/71.webp?2
      https://thisismagma.com/assets/home/lore/seq/72.webp?2
      https://thisismagma.com/assets/home/lore/seq/73.webp?2
      https://thisismagma.com/assets/home/lore/seq/74.webp?2
      https://thisismagma.com/assets/home/lore/seq/75.webp?2
      https://thisismagma.com/assets/home/lore/seq/76.webp?2
      https://thisismagma.com/assets/home/lore/seq/77.webp?2
      https://thisismagma.com/assets/home/lore/seq/78.webp?2
      https://thisismagma.com/assets/home/lore/seq/79.webp?2
      https://thisismagma.com/assets/home/lore/seq/80.webp?2
      https://thisismagma.com/assets/home/lore/seq/81.webp?2
      https://thisismagma.com/assets/home/lore/seq/82.webp?2
      https://thisismagma.com/assets/home/lore/seq/83.webp?2
      https://thisismagma.com/assets/home/lore/seq/84.webp?2
      https://thisismagma.com/assets/home/lore/seq/85.webp?2
      https://thisismagma.com/assets/home/lore/seq/86.webp?2
      https://thisismagma.com/assets/home/lore/seq/87.webp?2
      https://thisismagma.com/assets/home/lore/seq/88.webp?2
      https://thisismagma.com/assets/home/lore/seq/89.webp?2
      https://thisismagma.com/assets/home/lore/seq/90.webp?2
      https://thisismagma.com/assets/home/lore/seq/91.webp?2
      https://thisismagma.com/assets/home/lore/seq/92.webp?2
      https://thisismagma.com/assets/home/lore/seq/93.webp?2
      https://thisismagma.com/assets/home/lore/seq/94.webp?2
      https://thisismagma.com/assets/home/lore/seq/95.webp?2
      https://thisismagma.com/assets/home/lore/seq/96.webp?2
      https://thisismagma.com/assets/home/lore/seq/97.webp?2
      https://thisismagma.com/assets/home/lore/seq/98.webp?2
      https://thisismagma.com/assets/home/lore/seq/99.webp?2
      https://thisismagma.com/assets/home/lore/seq/100.webp?2
      https://thisismagma.com/assets/home/lore/seq/101.webp?2
      https://thisismagma.com/assets/home/lore/seq/102.webp?2
      https://thisismagma.com/assets/home/lore/seq/103.webp?2
      https://thisismagma.com/assets/home/lore/seq/104.webp?2
      https://thisismagma.com/assets/home/lore/seq/105.webp?2
      https://thisismagma.com/assets/home/lore/seq/106.webp?2
      https://thisismagma.com/assets/home/lore/seq/107.webp?2
      https://thisismagma.com/assets/home/lore/seq/108.webp?2
      https://thisismagma.com/assets/home/lore/seq/109.webp?2
      https://thisismagma.com/assets/home/lore/seq/110.webp?2
      https://thisismagma.com/assets/home/lore/seq/111.webp?2
      https://thisismagma.com/assets/home/lore/seq/112.webp?2
      https://thisismagma.com/assets/home/lore/seq/113.webp?2
      https://thisismagma.com/assets/home/lore/seq/114.webp?2
      https://thisismagma.com/assets/home/lore/seq/115.webp?2
      https://thisismagma.com/assets/home/lore/seq/116.webp?2
      https://thisismagma.com/assets/home/lore/seq/117.webp?2
      https://thisismagma.com/assets/home/lore/seq/118.webp?2
      https://thisismagma.com/assets/home/lore/seq/119.webp?2
      https://thisismagma.com/assets/home/lore/seq/120.webp?2
      https://thisismagma.com/assets/home/lore/seq/121.webp?2
      https://thisismagma.com/assets/home/lore/seq/122.webp?2
      https://thisismagma.com/assets/home/lore/seq/123.webp?2
      https://thisismagma.com/assets/home/lore/seq/124.webp?2
      https://thisismagma.com/assets/home/lore/seq/125.webp?2
      https://thisismagma.com/assets/home/lore/seq/126.webp?2
      https://thisismagma.com/assets/home/lore/seq/127.webp?2
      https://thisismagma.com/assets/home/lore/seq/128.webp?2
      https://thisismagma.com/assets/home/lore/seq/129.webp?2
      https://thisismagma.com/assets/home/lore/seq/130.webp?2
      https://thisismagma.com/assets/home/lore/seq/131.webp?2
      https://thisismagma.com/assets/home/lore/seq/132.webp?2
      https://thisismagma.com/assets/home/lore/seq/133.webp?2
      https://thisismagma.com/assets/home/lore/seq/134.webp?2
      https://thisismagma.com/assets/home/lore/seq/135.webp?2
      https://thisismagma.com/assets/home/lore/seq/136.webp?2
      
      `;
      return data.split("\n")[index];
      }
      
      const frameCount = 136;
      
      const images = [];
      const imageSeq = {
      frame: 1,
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
        }
      

        // gsap.to(imageSeq, {
        //   frame: frameCount - 1,
        //   snap: "frame",
        //   ease: `none`,
        //   scrollTrigger: {
        //     scrub: .5,
        //     trigger: `#page7`,
        //     start: `top top`,
        //     end: `250% top`,
        //     scroller: `#main`,
        //   },
          // onUpdate: render,
          
          // onReverseComplete: function() {
          //   gsap.to(".page7-circle", {
          //     opacity: 1,
          //     duration: 1.2,
          //     ease: "power1.out",
          //     scale: 1,
          //   });
          // },
        // });

      
      gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: .5,
        trigger: `#page7`,
        start: `top top`,
        end: `250% top`,
        scroller: `#main`,
      },
      onUpdate: render,
      onComplete: function() {

        gsap.to(".page7-circle-percentage",{
          // opacity: 0,
          visibility: "hidden",
          // display:"none",
          delay: 0.3,
          // scale: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: ".page7-circle-percentage",
            scroller: "#main",
            start: "center 70%",
            end: "bottom 50%",
            scrub: 0.01,
          },
          
          // duration:5,
          // ease: "power3",
          // ease: "none"
        });

        gsap.to(".m-i-text",{
          // opacity: 0,
          visibility: "hidden",
          // display:"none",
          delay: 0.3,
          // scale: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: ".page7-circle-percentage",
            scroller: "#main",
            start: "center 70%",
            end: "bottom 50%",
            scrub: 0.01,
          },
          
          // duration:5,
          // ease: "power3",
          // ease: "none"
        });

        gsap.to(".fp-circle", {
          scrollTrigger: {
            trigger: ".fp-circle",
            scroller: "#main",
            start: "center center",
            end: "bottom 20%",
            scrub: true,
          },
          opacity: 1,
          // delay: 0.3,
          scale: 1,
          // duration:5,
          // ease: "power3",
          // ease: "none"
          onComplete: function() {
          
        }
        });
        
      },
      });
      
      images[1].onload = render;
      
      // function render() {
      // scaleImage(images[imageSeq.frame], context);
      // }
  
      function render() {
        scaleImage(images[imageSeq.frame], context);
      
        const progress = imageSeq.frame / (frameCount - 1);
        const percent = Math.floor(progress * 100);
      
        if (circleVisible) {
          const currentSize = 16 + (60 - 16) * progress;
          gsap.set(".page7-circle", {
            width: `${currentSize}vw`,
            height: `${currentSize}vw`,
            left: "50%",
            top: "50%",
            xPercent: -50,
            yPercent: -50,
            opacity: 1,
          });
        
          document.querySelector(".page7-circle-percentage").textContent = `${percent}%`;
        }
        
        
  
      }
      
      
      function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
      }
      ScrollTrigger.create({
      
      trigger: "#page7",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `320% top`,
      });
  
      let maxSize = 16; // Starting size for the circle (in vw)
  
      // Scroll-based animation for scaling up dynamically
      gsap.fromTo(".page7-circle",
        {
          width: "2vw", // Initial small size
          height: "2vw",
          opacity: 0,
          y: 100,
          xPercent: -50,
          yPercent: -50,
          left: "50%",
          top: "50%",
        },
        {
          scrollTrigger: {
            trigger: ".page7-circle",
            scroller: "#main",
            start: "top 90%",
            scrub:.2,
            end: "top 70%",
            toggleActions: "play none none reverse",
            onEnter: () => circleVisible = true,
            onLeaveBack: () => circleVisible = false,
          },
          opacity: 1,
          y: 0,
          width: "16vw", // Stop at 16vw size after animation starts
          height: "16vw",
          delay: 0.5,
          duration: 1.2,
          ease: "power1.out",
        }
      );
      
      // Scroll-based size growth (No fixed max size)
      gsap.to(".page7-circle", {
        scrollTrigger: {
          scrub: 1.2,
          trigger: "#page7",
          start: "top top",
          end: "bottom top",
          scroller: "#main",
          onUpdate: function() {
            const progress = ScrollTrigger.progress;
            
            // Ensure progress is a valid number
            if (progress !== undefined && !isNaN(progress)) {
              maxSize = 16 + (100 * progress); // Scale the size based on the scroll progress
      
              // Dynamically update the circle size based on progress
              gsap.set(".page7-circle", {
                width: `${maxSize}vw`,
                height: `${maxSize}vw`,
                left: "50%",
                top: "50%",
                xPercent: -50,
                yPercent: -50,
                opacity: 1,
              });
      
              // Update percentage text
              const percent = Math.floor(progress * 100);
              document.querySelector(".page7-circle-percentage").textContent = `${percent}%`;


            }
          }
        }
      });
      }
      canvas3()
  
  
  
  
      // gsap.from(".page7-circle",{
      //   scrollTrigger: {
      //     trigger: ".page7-circle",
      //     scroller: "#main",
      //     start: "top 80%",
      //     end: "bottom top",
      //     markers:true,
      //     toggleActions:
      //   },
      //   scale: 0,
      //   opacity:0,
      //   delay:1,
      //   duration: 1.2,
      // })
  
      gsap.to(".page7-circle-inner"),{
        scrollTrigger: {
          trigger: ".page7-circle-inner",
          scroller: "#main",
          start: "top center",
          end: "bottom top",
          scrub:.5
        },
        backgroundColor: "#0a3bce88"
      }







// gsap.to(".page7-circle", {
//   scrollTrigger: {
//     trigger: "#page7",
//     scroller: "#main",
//     start: "top 80%",
//     end: "bottom top",
//     scrub:.5,
//   },
//   opacity: 0,
//   duration: 1.2,
//   scale:0.5,
//   ease: "power1.out",
//   delay: 1.2,

// })








// gsap.set("#page8-video",{
//   scale: 1.5,
//   opacity: 0,
// });


// gsap.to("#page8-video",{
//   scrollTrigger: {
//     trigger: "#page8-video",
//     scroller: "#main",
//     start: "top bottom",
//     end: "bottom top",
//     scrub:.5,
//   },
//   opacity: 0,
//   scale: 2,
//   // duration: 1.2,
// });

