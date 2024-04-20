let cardEl=document.createElement('div');
cardEl.className='card';

let productImage = document.createElement('img');
productImage.src = 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22462330/2023/3/22/27a1d087-dc81-46a0-9b86-505f6491b5931679431326265RoyalChallengersBangalore2023MensReplicaJersey1.jpg';
productImage.alt = "image";
productImage.className = 'productimage';
cardEl.appendChild(productImage);


// content lineone

let contentLineone=document.createElement('div');
contentLineone.className='contentLineone';

let productName=document.createElement('h3');
productName.innerText="curta"
contentLineone.appendChild(productName);

let vendorName=document.createElement('p');
vendorName.textContent=`• buma`;
contentLineone.appendChild(vendorName);

cardEl.appendChild(contentLineone);

// contentlinetwo
let contentLinetwo=document.createElement('div');
contentLinetwo.className='contentLineone';

let price=document.createElement('p');
price.textContent=` Rs 1119.00`;
contentLinetwo.appendChild(price);

let compareprice=document.createElement('p');
compareprice.textContent=` Rs 1119.00`;
contentLinetwo.appendChild(compareprice);
compareprice.classList.add('linethrough');

let discount=document.createElement('p');
discount.textContent=` 50% off`;
contentLinetwo.appendChild(discount);
discount.classList.add('discount');

cardEl.appendChild(contentLinetwo);

// button

let btnEl=document.createElement('button');
btnEl.textContent="Add to Cart";
btnEl.className='cardbutton';
cardEl.appendChild(btnEl)


document.getElementById('cardcontainer').appendChild(cardEl);
