function copyPixToClipboard() {
    const pix = "00020126430014br.gov.bcb.pix0114047492980001980203Pix5204000053039865802BR5925PRIMEIRA IGREJA BATISTA R6007AQUIRAZ622905255fIkxzEdCnaRg2hHvkdx9lZS76304B0DF";

    copyPixButton.innerText = "Pix copiado!";
    copyPixButton.className = "copied";
    navigator.clipboard.writeText(pix);
}

const copyPixButton = document.getElementById("copy-pix");
const qrCodeImg = document.getElementById("qr-code");

copyPixButton.addEventListener("click", copyPixToClipboard);
qrCodeImg.addEventListener("click", copyPixToClipboard);