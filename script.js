let menEl= document.getElementById('Mencategory');
let WomenEl= document.getElementById('Womencategory');
let KidsEl= document.getElementById('Kidscategory');

function showProducts(category) {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(response => response.json())
        .then(data => {
            const categoryData = data.categories.find(cat => cat.category_name === category);

            if (categoryData) {
                document.getElementById('cardcontainer').innerHTML = '';

                categoryData.category_products.forEach(product => {
                    createProductCard(product);
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));
    }
    
// card container
function createProductCard(product){

let cardEl=document.createElement('div');
cardEl.className='card';

let productImage = document.createElement('img');
productImage.src = product.image;
productImage.alt = "product image";
productImage.className = 'productimage';
cardEl.appendChild(productImage);

if (product.badge_text !== null) {
    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.innerText = product.badge_text;
    cardEl.appendChild(badge);
}
// content lineone

let contentLineone=document.createElement('div');
contentLineone.className='contentLineone';

let productName=document.createElement('h4');
productName.className="productname"
productName.innerText=`${product.title}`;
contentLineone.appendChild(productName);

let vendorName=document.createElement('p');
vendorName.className="vendorName"
vendorName.textContent=`• ${product.vendor}`;
contentLineone.appendChild(vendorName);

cardEl.appendChild(contentLineone);

// contentlinetwo
let contentLinetwo=document.createElement('div');
contentLinetwo.className='contentLineone';
contentLinetwo.classList.add("contentLinetwo")

let price=document.createElement('p');
price.textContent=` Rs ${product.price}.00`;
contentLinetwo.appendChild(price);

let compareprice=document.createElement('p');
compareprice.textContent=`${product.compare_at_price}.00`;
contentLinetwo.appendChild(compareprice);
compareprice.classList.add('linethrough');

let discount=document.createElement('p');
let discountPercentage=calculateDiscountPercentage(product.price, product.compare_at_price);
discount.textContent=` ${discountPercentage}% off`
contentLinetwo.appendChild(discount);
discount.classList.add('discount');

cardEl.appendChild(contentLinetwo);

// button

let btnEl=document.createElement('button');
btnEl.textContent="Add to Cart";
btnEl.className='cardbutton';
cardEl.appendChild(btnEl)

document.getElementById('cardcontainer').appendChild(cardEl);

}

function calculateDiscountPercentage(price, compareAtPrice) {
    const discount = ((compareAtPrice - price) / compareAtPrice) * 100;
    return Math.round(discount);
}

document.addEventListener("DOMContentLoaded", function () {
    showProducts('Men');
    menEl.classList.add("clicked");
});

menEl.onclick=function(){
    document.getElementById('cardcontainer').innerHTML = '';
    menEl.classList.add("clicked");
    WomenEl.classList.remove("clicked")
    KidsEl.classList.remove("clicked")
    showProducts('Men');

}

WomenEl.onclick=function(){
    document.getElementById('cardcontainer').innerHTML = '';
    menEl.classList.remove("clicked");
    WomenEl.classList.add("clicked")
    KidsEl.classList.remove("clicked")
    showProducts('Women');

}

KidsEl.onclick=function(){
    document.getElementById('cardcontainer').innerHTML = '';
    menEl.classList.remove("clicked");
    WomenEl.classList.remove("clicked")
    KidsEl.classList.add("clicked")
    showProducts('Kids');

}