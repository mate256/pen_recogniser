let useBackCamera = true;
let model, webcam, maxPredictions;
const status = document.getElementById("status");
const webcamContainer = document.getElementById("webcam-container");

const modelURL = "/static/model/model.json";
const metadataURL = "/static/model/metadata.json";

async function init() {
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Setup webcam
    const flip = !useBackCamera;
    webcam = new tmImage.Webcam(400, 400, flip); // width, height, flip
    await webcam.setup({ facingMode: useBackCamera ? "environment" : "user" });
    await webcam.play();
    window.requestAnimationFrame(loop);

    // Add canvas to DOM
    webcamContainer.innerHTML = "";
    webcamContainer.appendChild(webcam.canvas);

    status.textContent = "✅ Modell betöltve!";
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    const tollPred = prediction.find(p => p.className.toLowerCase().includes("toll"));
    const conf = tollPred?.probability || 0;

    status.textContent = `✏️ Toll: ${Math.round(conf * 100)}%`;

    if (conf > 0.85) {
        status.style.color = "green";
    } else {
        status.style.color = "red";
    }
}

document.getElementById("switchBtn").addEventListener("click", () => {
    useBackCamera = !useBackCamera;
    init();
});

init();