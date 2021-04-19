const saveBtn = document.getElementById("save");
const input = document.getElementById("input");
const originalCanvas = document.getElementById("canvas");

saveBtn.addEventListener("click", () => {
  html2canvas(input, {}).then(canvas => {
    const ctx = originalCanvas.getContext("2d");
    console.log("canvas");
    console.log(canvas);
    document.getElementById("img-out").append(canvas);
    ctx.drawImage(canvas, 0, 0);
  });
});
