const btn = document.getElementById("btnTop");

btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
  }




