let ultimoQRCode = null;

function gerarQRCode() {
  const container = document.getElementById("qrcode");
  container.innerHTML = "";
  const url = document.getElementById("url").value.trim();

  if (!url) {
    alert("Digite uma URL primeiro!");
    return;
  }

  ultimoQRCode = new QRCode(container, {
    text: url,
    width: 200,
    height: 200,
  });

  document.getElementById("downloadBtn").disabled = false;
}

function baixarQRCode() {
  const canvas = document.querySelector("#qrcode canvas");
  const img = document.querySelector("#qrcode img");

  let dataUrl = "";
  if (canvas) {
    dataUrl = canvas.toDataURL("image/png");
  } else if (img) {
    dataUrl = img.src;
  } else {
    alert("Nenhum QR Code disponível para baixar!");
    return;
  }

  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = "qrcode.png";
  link.click();
}
