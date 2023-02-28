const generateBtn = document.querySelector("form button");
const qrInput = document.querySelector("form input");
const qrImg = document.querySelector(".qr-code img");
const qrBox = document.querySelector(".qr-code");

generateBtn.addEventListener("click", function () {
  let qrValue = qrInput.value;

  if (!qrValue) {
    return alert("لطفا یک متن وارد کنید!");
  }

  generateBtn.textContent = "در حال تولید QR CODE";

  //  get ip from https://goqr.me/api/
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

  qrImg.addEventListener("load", function () {
    qrBox.style.display = "flex";
    generateBtn.textContent = "تولید QR CODE";
  });
});

qrInput.addEventListener("keyup", function () {
  let text = qrInput.value;

  if (!text) {
    qrBox.style.display = "none";
  }
});
