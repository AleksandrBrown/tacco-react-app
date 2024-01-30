const imagePaths = [];
for (let i = 1; i <= 25; i++) {
    const imagePath = require(`../../assets/tacos/${i}-taco-img.png`)
    imagePaths.push(imagePath);
}
export default imagePaths;