function copyPixToClipboard(event) {
    const pix = "00020126430014br.gov.bcb.pix0114047492980001980203Pix5204000053039865802BR5925PRIMEIRA IGREJA BATISTA R6007AQUIRAZ622905255fIkxzEdCnaRg2hHvkdx9lZS76304B0DF";

    event.target.innerText = "Pix copiado!";
    event.target.className = "copied";
    navigator.clipboard.writeText(pix);
}

const copyPixButton = document.getElementById("copy-pix");

copyPixButton.addEventListener("click", copyPixToClipboard)