function updateProduct(item, price, id) {
  if (id.includes("plus")==true) {
    product =document.getElementById(item + "-number").value =
      parseInt(document.getElementById(item + "-number").value) + 1;
     
  } else {
    if (document.getElementById(item + "-number").value < 1) return;
    document.getElementById(item + "-number").value =
      parseInt(document.getElementById(item + "-number").value) - 1;
  }
  document.getElementById(item + "-total").innerText =
    parseInt(document.getElementById(item + "-number").value) * price;
    calculation()
}

function calculation(){
   let subtotal = parseInt(document.getElementById("phone-total").innerText)+parseInt(document.getElementById("case-total").innerText)
   let tax = subtotal/10;
   let total = subtotal+tax;
   console.log(subtotal, tax, total)
   document.getElementById("sub-total").innerText= subtotal;
   document.getElementById("tax-amount").innerText= tax;
   document.getElementById("total-price").innerText= total;
  
}
//increase phone part
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProduct("phone", 1219, this.id);
});
//increase casing part
document.getElementById("case-plus").addEventListener("click", function () {
  updateProduct("case", 56, this.id);
});
//decrease phone
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProduct("phone", 1219, this.id);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProduct("case", 56, this.id);
});
