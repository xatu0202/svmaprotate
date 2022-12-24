let deg = 0;
let img;
let ctx;
let f;
const drawRotatedImage = (image, x, y, angle) => {
    ctx.clearRect(0,0,1000,1000);
    // コンテキストを保存する
    ctx.save();
    ctx.scale(0.2,0.2)
    // 回転の中心に原点を移動する
    ctx.translate(x, y);
    // canvasを回転する
    ctx.rotate(angle *  Math.PI/180);
    // 画像サイズの半分だけずらして画像を描画する
    ctx.drawImage(image,-(image.width/2), -(image.height/2));
    // コンテキストを元に戻す
    ctx.restore();
}
function rotate(){
    console.log(deg)
    drawRotatedImage(img, 3383/2, 3383/2, deg+=10);
    f=requestAnimationFrame(rotate)
}
const load = () => {
    console.log("load")
    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    img = new Image(3383,3383);
    img.addEventListener("load",  rotate);
    img.src = "map.png";
    canvas.addEventListener("click", e=>{cancelAnimationFrame(f); ctx.arc(e.x, e.y, 50, 0, Math.PI*2,true); ctx.stroke()}, {once:true})
}
window.addEventListener("load", load);