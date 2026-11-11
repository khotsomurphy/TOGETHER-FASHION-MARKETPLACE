const starter = [
 {id:1,name:"Everyday graphic tee",category:"Men",seller:"Urban Thread Co.",original:150,emoji:"👕"},
 {id:2,name:"Soft knit hoodie",category:"Women",seller:"Mila Boutique",original:280,emoji:"🧥"},
 {id:3,name:"Kids weekend set",category:"Kids",seller:"Little Loop",original:190,emoji:"🧒"},
 {id:4,name:"Classic street sneakers",category:"Shoes",seller:"Step Society",original:420,emoji:"👟"},
 {id:5,name:"Everyday tote bag",category:"Accessories",seller:"Made Local",original:120,emoji:"👜"},
 {id:6,name:"Denim jacket",category:"Women",seller:"Mila Boutique",original:500,emoji:"🧥"},
 {id:7,name:"Relaxed-fit shirt",category:"Men",seller:"Urban Thread Co.",original:220,emoji:"👔"},
 {id:8,name:"Colour-pop trainers",category:"Shoes",seller:"Step Society",original:350,emoji:"👟"}
];
let products = [...starter, ...JSON.parse(localStorage.getItem("together-products")||"[]")];
let cart = JSON.parse(localStorage.getItem("together-cart")||"[]");
const money = n => "R"+Number(n).toFixed(2);
const finalPrice = p => Number((p.original*1.2).toFixed(2));
function renderProducts(list=products){document.querySelector("#products").innerHTML=list.map(p=>`<article class="product"><div class="product-art">${p.emoji||"👚"}</div><div class="product-info"><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.category)} · ${escapeHtml(p.seller||"Together seller")}</p><div class="price">${money(finalPrice(p))}</div><button data-add="${p.id}">Add to cart</button></div></article>`).join("")}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function save(){localStorage.setItem("together-cart",JSON.stringify(cart));document.querySelector("#cart-count").textContent=cart.reduce((n,x)=>n+x.qty,0)}
function show(view){document.querySelectorAll(".view").forEach(x=>x.classList.add("hidden"));document.querySelector(`#${view}-view`).classList.remove("hidden");if(view==="cart")renderCart();window.scrollTo({top:0,behavior:"smooth"})}
function renderCart(){let el=document.querySelector("#cart-items");if(!cart.length){el.innerHTML="<p>Your cart is empty. Explore the marketplace to find something you love.</p>";return}let subtotal=cart.reduce((s,x)=>s+x.original*x.qty,0),fee=subtotal*.2;el.innerHTML=cart.map(x=>`<p>${x.emoji} <b>${escapeHtml(x.name)}</b> × ${x.qty} — ${money(finalPrice(x)*x.qty)}</p>`).join("")+`<hr><p>Seller prices: ${money(subtotal)}</p><p>Together 20% service markup: ${money(fee)}</p><h2>Total: ${money(subtotal+fee)}</h2><p class="fine">Prototype checkout is not connected to a payment provider. No payment has been taken.</p>`}
document.addEventListener("click",e=>{let v=e.target.closest("[data-view]");if(v)show(v.dataset.view);let a=e.target.closest("[data-add]");if(a){let p=products.find(x=>x.id===Number(a.dataset.add));let item=cart.find(x=>x.id===p.id);item?item.qty++:cart.push({...p,qty:1});save();a.textContent="Added ✓";setTimeout(()=>a.textContent="Add to cart",900)}let c=e.target.closest("[data-category]");if(c){show("shop");renderProducts(products.filter(p=>p.category===c.dataset.category))}});
document.querySelector("#search").addEventListener("input",e=>renderProducts(products.filter(p=>(p.name+" "+p.category+" "+p.seller).toLowerCase().includes(e.target.value.toLowerCase()))));
document.querySelector("#shop-now").onclick=()=>document.querySelector("#products").scrollIntoView({behavior:"smooth"});
function preview(){let n=Number(document.querySelector("#product-price").value)||0;document.querySelector("#price-preview").innerHTML=`Customer price: ${money(n*1.2)} <small>Seller price ${money(n)} + Together markup ${money(n*.2)}</small>`}
document.querySelector("#product-price").addEventListener("input",preview);
document.querySelector("#product-form").addEventListener("submit",e=>{e.preventDefault();let p={id:Date.now(),name:document.querySelector("#product-name").value,category:document.querySelector("#product-category").value,seller:"Demo seller",original:Number(document.querySelector("#product-price").value),emoji:document.querySelector("#product-emoji").value||"👚"};if(p.original<=0)return;products.push(p);let custom=products.filter(x=>x.id>1000000000000);localStorage.setItem("together-products",JSON.stringify(custom));renderProducts();e.target.reset();preview();alert("Demo listing added. It is visible in this browser only.")});
document.querySelector("#year").textContent=new Date().getFullYear();renderProducts();save();
if ("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
