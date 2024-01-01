document.addEventListener("DOMContentLoaded", function () {
  var textContainer = document.getElementById("typewriter");
  var text = `
         Hello! I'm Min Thway Khaing, a passionate and dedicated software engineer with a diverse background in the tech industry. With a solid foundation in software development, I have accumulated valuable experience in both backend and web development.    
            I kickstarted my career as a software engineer at Daiwa-Ace Technology, where I spent a rewarding year honing my skills and contributing to innovative projects. This experience equipped me with a strong foundation in software engineering principles and problem-solving.    
            Building on this foundation, I transitioned into the role of a web developer at Myanmar Information Technology. During my time there, I delved into the world of web technologies, working on a variety of projects that enriched my understanding of frontend development.
            I took a keen interest in outsource projects and had the opportunity to collaborate on projects using cutting-edge technologies such as Next.js, Flutter, Rust, and more.    
         I specialize in crafting efficient and scalable solutions, and I am particularly enthusiastic about projects that challenge me to push the boundaries of what technology can achieve. My expertise extends to working with frameworks like Next.js for dynamic and responsive web applications, Flutter for cross-platform mobile development, and Rust for high-performance systems.    
         I believe in continuous learning and staying abreast of the latest industry trends. I am excited about the prospect of contributing my skills and knowledge to future projects that demand creativity, innovation, and a passion for excellence.    
         Let's build something extraordinary together!
    `;

  function typeText(index) {
    if (index < text.length) {
      textContainer.innerHTML += text.charAt(index);
      index++;
      setTimeout(function () {
        typeText(index);
      }, 40); // Adjust the typing speed (20ms in this example)
    }
  }

  typeText(0); // Start typing the text
});
