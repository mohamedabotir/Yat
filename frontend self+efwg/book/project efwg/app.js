const list=document.querySelectorAll(".article");
const bar=document.createElement("ul");
bar.setAttribute("id","bar");
for (let i = 0; i < list.length; i++) {
	let itemList=document.createElement("li");
	itemList.textContent=`Section${i+1}`;
	itemList.setAttribute("class","item-bar");

	bar.appendChild(itemList);
}
document.body.appendChild(bar);