const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const all = data.data
    displayPhones(all)
}


const displayPhones = phones =>{
    const phn = document.getElementById('cointaner')
    phn.textContent = '';

    phones.forEach(phone => {
         const phoneCard = document.createElement('div')
         phoneCard.classList = `card p-2 md/lg:p-10 bg-gray-100 shadow-xl`;
         phoneCard.innerHTML =`
                <figure><img src="${phone.image}" /></figure>
                <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>${phone.slug}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
                </div>
         `
         phn.appendChild(phoneCard)
    });

}
 
const search = () => {
    const searchFild = document.getElementById('Search');
    const searchText = searchFild.value;
    console.log(searchText)
    loadPhone(searchText)
}

