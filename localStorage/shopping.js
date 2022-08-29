
const displayLocalStorageCart = () => {
    const cart = getCart();
    //cartObj
    for(const name in cart) {
        displayProduct(name);
    }
}


const addItem = () => {
    const nameField = document.getElementById("product-name");
    const name = nameField.value;

    if(!name) {
        return;
    }
    //display in the ui
    displayProduct(name);

    //add to local storage
    addProductToCart(name);

    //clear
    nameField.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById("products");
    const li = document.createElement("li");
    li.innerText = name;
    ul.appendChild(li);
}




const getCart = () => {
    const cart = localStorage.getItem("cart");

    let cartObj;

    if(cart) { //age theke save kora thake
        cartObj = JSON.parse(cart);//js object e convert kora hoyece
    }
    else{//1st time visit kortheci
        cartObj = {};
    }

    return cartObj;
}

const addProductToCart = name => {
    console.log(name);
    const cart = getCart();

    if(cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }

    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
}

const placeOrder = () =>{
    document.getElementById("products").textContent = '';
    localStorage.removeItem("cart");
}

displayLocalStorageCart();// calling here directly

/*

const cart = {
    tea: 1,
    coffee: 1
}
const item = ace =>{
    if(cart[ace]){
        const old = cart[ace] = cart[ace] + 1;
        console.log(old);
    }
    else{
        const New = cart[ace] = 1;
        console.log(New);
    }

    console.log(cart);
}
item("milk")

*/