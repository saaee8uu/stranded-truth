
let DATA={};
const chart=document.getElementById("interactiveChart");
function render(key){
 const d=DATA[key]; if(!d)return;
 document.querySelectorAll(".dataset-switcher button").forEach(b=>b.classList.toggle("active",b.dataset.set===key));
 document.getElementById("chartTitle").textContent=d.title;
 document.getElementById("chartSubtitle").textContent=d.subtitle;
 document.getElementById("chartSource").textContent="SOURCE · "+d.source;
 document.getElementById("chartLimit").textContent="LIMIT · "+d.limit;
 const max=Math.max(...d.values)*1.12;
 chart.innerHTML=d.labels.map((label,i)=>{
   const v=d.values[i], h=Math.max(4,(v/max)*100);
   return `<button class="chart-column" aria-label="${label}: ${v}${d.unit}">
     <span class="chart-value">${v}${d.unit}</span>
     <i style="height:${h}%"></i><b>${label}</b>
   </button>`;
 }).join("");
}
fetch("research-data.json").then(r=>r.json()).then(d=>{DATA=d;render("nutrition")});
document.querySelectorAll(".dataset-switcher button").forEach(b=>b.addEventListener("click",()=>render(b.dataset.set)));
