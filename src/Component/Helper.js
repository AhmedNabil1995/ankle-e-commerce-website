export function addToCart(product){
    
    let user = localStorage.getItem('user');
    if(!user) return 'please login first'
    let products = JSON.parse(localStorage.getItem('items')) || [];

    let exist = products.some((element)=>{
        return element.id == product.id
    })

    if(!exist){
    let newItems = JSON.stringify([...products,product]); 
    localStorage.setItem('items',newItems);
    }

    
}

export function getFromCart(){
    let user = localStorage.getItem('user');
    if(user) return JSON.parse(localStorage.getItem('items')) || []
    return []
}

export function removeFromCart(product){
    let products = JSON.parse(localStorage.getItem('items'))
    let newItems = products.filter((element)=>{
                        return element.id != product.id
                    })
    newItems = JSON.stringify(newItems); 
    localStorage.setItem('items',newItems);
}

export function addToFavorite(product){
    let products = JSON.parse(localStorage.getItem('favorite')) || [];

    let exist = products.some((element)=>{
        return element.id == product.id
    })

    if(!exist){
    let newItems = JSON.stringify([...products,product]); 
    localStorage.setItem('favorite',newItems);
    }
}

export function getFromFavorite(){
    return JSON.parse(localStorage.getItem('favorite')) || []
}


export function removeFromFavorite(product){
    let products = JSON.parse(localStorage.getItem('favorite'))
    let newItems = products.filter((element)=>{
                        return element.id != product.id
                    })
    newItems = JSON.stringify(newItems);
    localStorage.setItem('favorite',newItems);
}