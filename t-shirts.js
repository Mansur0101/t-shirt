const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];
function update(){
  document.getElementById("image1").src = tshirts[0].image;
  const title1 = document.getElementById('title1');
  const price1 = document.getElementById('price1');
  const stock1 = document.getElementById('stock1');
  const buttons1 = document.getElementById('buttons1');
  const buyButton = document.getElementById('buy');
  title1.innerHTML = tshirts[0].title;
  price1.innerHTML = "Price: " + tshirts[0].price;
  if(tshirts[0].stock == 0){
    stock1.innerHTML = "Out of stock!";
    buttons1.style.display = 'none';
  }
  else{
    stock1.innerHTML = "In stock: " + tshirts[0].stock;
  }
  document.getElementById("image2").src = tshirts[1].image;
  const title2 = document.getElementById('title2');
  const price2 = document.getElementById('price2');
  const stock2 = document.getElementById('stock2');
  const buttons2 = document.getElementById('buttons2');
  title2.innerHTML = tshirts[1].title;
  price2.innerHTML = "Price: " + tshirts[1].price;
  if(tshirts[1].stock == 0){
    stock2.innerHTML = "Out of stock!";
    buttons2.style.display = 'none';
  }
  else{
    stock2.innerHTML = "In stock: " + tshirts[1].stock;
  }  
  document.getElementById("image3").src = tshirts[2].image;
  const title3 = document.getElementById('title3');
  const price3 = document.getElementById('price3');
  const stock3 = document.getElementById('stock3');
  const buttons3 = document.getElementById('buttons3');
  title3.innerHTML = tshirts[2].title;
  price3.innerHTML = "Price: " + tshirts[2].price;
  if(tshirts[2].stock == 0){
    stock3.innerHTML = "Out of stock!";
    buttons3.style.display = 'none';
  }
  else{
    stock3.innerHTML = "In stock: " + tshirts[2].stock;
  }
  document.getElementById("image4").src = tshirts[3].image;
  const title4 = document.getElementById('title4');
  const price4 = document.getElementById('price4');
  const stock4 = document.getElementById('stock4');
  const buttons4 = document.getElementById('buttons4');
  title4.innerHTML = tshirts[3].title;
  price4.innerHTML = "Price: " + tshirts[3].price;
  if(tshirts[3].stock == 0){
    stock4.innerHTML = "Out of stock!";
    buttons4.style.display = 'none';
  }
  else{
    stock4.innerHTML = "In stock: " + tshirts[3].stock;
  }
  document.getElementById("image5").src = tshirts[4].image;
  const title5 = document.getElementById('title5');
  const price5 = document.getElementById('price5');
  const stock5 = document.getElementById('stock5');
  const buttons5 = document.getElementById('buttons5');
  title5.innerHTML = tshirts[4].title;
  price5.innerHTML = "Price: " + tshirts[4].price;
  if(tshirts[4].stock == 0){
    stock5.innerHTML = "Out of stock!";
    buttons5.style.display = 'none';
  }
  else{
    stock5.innerHTML = "In stock: " + tshirts[4].stock;
  }
  document.getElementById("image6").src = tshirts[5].image;
  const title6 = document.getElementById('title6');
  const price6 = document.getElementById('price6');
  const stock6 = document.getElementById('stock6');
  const buttons6 = document.getElementById('buttons6');
  title6.innerHTML = tshirts[5].title;
  price6.innerHTML = "Price: " + tshirts[5].price;
  if(tshirts[5].stock == 0){
    stock6.innerHTML = "Out of stock!";
    buttons6.style.display = 'none';
  }
  else{
    stock6.innerHTML = "In stock: " + tshirts[5].stock;
  }
  document.getElementById("image7").src = tshirts[6].image;
  const title7 = document.getElementById('title7');
  const price7 = document.getElementById('price7');
  const stock7 = document.getElementById('stock7');
  const buttons7 = document.getElementById('buttons7');
  title7.innerHTML = tshirts[6].title;
  price7.innerHTML = "Price: " + tshirts[6].price;
  if(tshirts[6].stock == 0){
    stock7.innerHTML = "Out of stock!";
    buttons7.style.display = 'none';
  }
  else{
    stock7.innerHTML = "In stock: " + tshirts[6].stock;
  }
  document.getElementById("image8").src = tshirts[7].image;
  const title8 = document.getElementById('title8');
  const price8 = document.getElementById('price8');
  const stock8 = document.getElementById('stock8');
  const buttons8 = document.getElementById('buttons8');
  title8.innerHTML = tshirts[7].title;
  price8.innerHTML = "Price: " + tshirts[7].price;
  if(tshirts[7].stock == 0){
    stock8.innerHTML = "Out of stock!";
    buttons8.style.display = 'none';
  }
  else{
    stock8.innerHTML = "In stock: " + tshirts[7].stock;
  }
  document.getElementById("image9").src = tshirts[8].image;
  const title9 = document.getElementById('title9');
  const price9 = document.getElementById('price9');
  const stock9 = document.getElementById('stock9');
  const buttons9 = document.getElementById('buttons9');
  title9.innerHTML = tshirts[8].title;
  price9.innerHTML = "Price: " + tshirts[8].price;
  if(tshirts[8].stock == 0){
    stock9.innerHTML = "Out of stock!";
    buttons9.style.display = 'none';
  }
  else{
    stock9.innerHTML = "In stock: " + tshirts[8].stock;
  }
}
update();


