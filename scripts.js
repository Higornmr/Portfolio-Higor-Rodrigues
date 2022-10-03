
const changeThemeBtn = document.querySelector("#change-theme");
const btn = document.getElementById("btnTop");
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 3
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    }
    else {
      box.classList.remove('show')
    }
  })
}


function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();



changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});

btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

const observer = new IntersectionObserver(entries => {
  Array.from(entries).forEach(entry => {
    if (entry.intersectionRatio >= 1) {
      entry.target.classList.add('init-hidden-off')
    }
  })

}, {
  threshold: [0, .5, 1]
})
Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
  observer.observe(element)
})



