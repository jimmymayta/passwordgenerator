const password = document.querySelector("#password");
const passwordcopy = document.querySelector("#passwordcopy");
const barprogress = document.querySelector("#barprogress");

const progressbar = (score) => {
  barprogress.style.width = `${score}%`;
  barprogress.textContent = `${score}%`;

  let colors = [
    "bg-secondary",
    "bg-success",
    "bg-warning",
    "bg-primary",
    "bg-danger",
  ];

  for (let i = 0; i < colors.length; i++) {
    barprogress.classList.remove(colors[i]);
  }

  switch (score) {
    case 0:
      barprogress.classList.add("bg-secondary");
      break;
    case 25:
      barprogress.classList.add("bg-success");
      break;
    case 50:
      barprogress.classList.add("bg-warning");
      break;
    case 75:
      barprogress.classList.add("bg-primary");
      break;
    case 100:
      barprogress.classList.add("bg-danger");
      break;
  }
};

const generatorpassword = () => {
  if (password.value.length > 0) {
    const result = zxcvbn(password.value);
    var score = Math.min(Math.floor(result.score * 25), 100);
    progressbar(score);
  }
};

const copypassword = () => {
  if (password.value.length > 0) {
    navigator.clipboard.writeText(password.value);
  }
};

const main = () => {
  password.addEventListener("click", generatorpassword);
  password.addEventListener("keyup", generatorpassword);
  password.addEventListener("keydown", generatorpassword);
  passwordcopy.addEventListener("click", copypassword);
};

main();
