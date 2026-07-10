
const layers={
health:["HEALTH","Where does survival depend most on place?"],
education:["EDUCATION","Where is a school not the same as access?"],
work:["WORK","Where do people move for opportunity?"],
water:["WATER & CLIMATE","Where are resource pressures converging?"]
};
document.querySelectorAll(".map-controls button").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll(".map-controls button").forEach(x=>x.classList.remove("active"));b.classList.add("active");
 const d=layers[b.dataset.layer];document.getElementById("mapTitle").textContent=d[0];document.getElementById("mapQuestion").textContent=d[1];
 document.getElementById("mapCanvas").dataset.layer=b.dataset.layer;
}));
