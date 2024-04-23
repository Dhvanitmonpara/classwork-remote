const btn1 = document.querySelectorAll(".btns");
btn1.forEach(() => {
  addEventListener("click", (b) => {
    btn1.forEach((a)=>{
        a.setAttribute('class', "nothing")
    })
    b.target.setAttribute("class", "myclass");
  });
});
