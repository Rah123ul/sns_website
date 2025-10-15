// * <script>
// const questions = [
//   {
//     question="What is the capital of India?",
//     options= ["Delhi", "Mumbai", "Kolkata", "Chennai"],
//     answer= "Delhi"
//   },
//   {
//     questio= "Who is the current President of the US?",
//     options= ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
//     answer= "Donald Trump"
//   }
// ];

// document.getElementById("start-quiz").addEventListener("click", function() {
//   let quizHTML = "";
//   questions.forEach((q, idx) => {
//     quizHTML += `<div>
//       <p>${q.question}</p>`;
//     q.options.forEach(opt => {
//       quizHTML += `<label>
//         <input type="radio" name="q${idx}" value="${opt}"> ${opt}
//       </label>`;
//     });
//     quizHTML += "</div>";
//   });
//   quizHTML += `<button id="submit-quiz">Submit</button>`;
//   document.getElementById("quiz-container").innerHTML = quizHTML;

//   document.getElementById("submit-quiz").onclick = function() {
//     let score = 0;
//     questions.forEach((q, idx) => {
//       const selected = document.querySelector(`input[name="q${idx}"]:checked`);
//       if (selected && selected.value === q.answer) score++;
//     });
//     document.getElementById("result").textContent = `Score: ${score}/${questions.length}`;
//   };
// });
// </script> */
document.addEventListener('DOMContentLoaded', function () {
    // Select all tab links
    const tabs = document.querySelectorAll('nav a');
    // Select all tab sections
    const sections = document.querySelectorAll('section[id]');
    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            // Remove 'active' from all tabs
            tabs.forEach(tabItem => {
                tabItem.classList.remove('active');
            });
            // Show the clicked tab's section
            const targetId = tab.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
            // Add 'active' class to clicked tab
            tab.classList.add('active');
        });
    });

    // Display first tab by default
    if (tabs.length > 0 && sections.length > 0) {
        tabs[0].classList.add('active');
        sections.forEach((section, index) => {
            section.style.display = index === 0 ? 'block' : 'none';
        });
    }
});
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
      sec.classList.add("visible");
    }
  });
});


