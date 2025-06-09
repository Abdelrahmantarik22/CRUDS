// Elements
let nname = document.getElementById('name');
let price = document.getElementById('price');
let type = document.getElementById('type');
let cate = document.getElementById('cate');
let deleet = document.getElementById('deleet');
let items = document.getElementById('items');
let bb = document.getElementById('bb');
let search=document.getElementById('search')
// Data
let products = [];
let indeex = 0;

// Load from localStorage
if (localStorage.getItem("product")) {
    products = JSON.parse(localStorage.getItem("product"));
    read();
} else {
    products = [];
}

// Add or Update product
function Add() {
  let product = {
    Name: nname.value,
    Price: price.value,
    Type: type.value,
    Cate: cate.value,
};
if(product.Name!==''&&product.Price!==''&&product.Type!==''&&product.Cate!==''){

  if (bb.innerHTML === 'Add products') {
    products.push(product);
  } else {
    products.splice(indeex, 1, product);
    bb.innerHTML = 'Add products';
  }
  
  localStorage.setItem("product", JSON.stringify(products));
  clearInputs();
  read();
}
}

// Display all products
function read() {
    
    let cartoona = '';
    for (let i = 0; i < products.length; i++) {
        cartoona += `
        <tbody>
        <tr>
          <th scope="row">${i}</th>
          <td>${products[i].Name}</td>
          <td>${products[i].Price}</td>
          <td>${products[i].Type}</td>
          <td>${products[i].Cate}</td>
          <td scope="col"><div class="btn btn-outline-warning" onclick="updateItem(${i})">Update</div></td>
          <td scope="col"><div class="btn btn-outline-danger" onclick="deletItem(${i})">Delet</div></td>
        </tr>
      </tbody>
    `;
  }

  items.innerHTML = cartoona;

  if (products.length === 0) {
    deleet.classList.add('clr');
  } else {
    deleet.classList.remove('clr');
  }
}

// Delete single product
function deletItem(e) {
  products.splice(e, 1);
  localStorage.setItem("product", JSON.stringify(products));
  read();
}

// Delete all products
function deletall() {
  products = [];
  localStorage.setItem("product", JSON.stringify(products));
  read();
}

// Prepare update form
function updateItem(e) {
  nname.value = products[e].Name;
  price.value = products[e].Price;
  type.value = products[e].Type;
  cate.value = products[e].Cate;
  bb.innerHTML = 'Update Product';
  indeex = e;
}

// Clear input fields
function clearInputs() {
  nname.value = '';
  price.value = '';
  type.value = '';
  cate.value = '';
}

function ssearch(e){
    let cartoona = '';
    for (let i = 0; i < products.length; i++) {
      if(products[i].Name.toLowerCase().includes( e.toLowerCase())){

        cartoona += `
        <tbody>
        <tr>
        <th scope="row">${i}</th>
        <td>${products[i].Name}</td>
        <td>${products[i].Price}</td>
        <td>${products[i].Type}</td>
        <td>${products[i].Cate}</td>
        <td scope="col"><div class="btn btn-outline-warning" onclick="updateItem(${i})">Update</div></td>
        <td scope="col"><div class="btn btn-outline-danger" onclick="deletItem(${i})">Delet</div></td>
        </tr>
        </tbody>
        `;
        }
        items.innerHTML = cartoona;
  }

  
  
}

