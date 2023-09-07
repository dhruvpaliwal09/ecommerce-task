
const postData =[
    {
        id:"1",
        name:"Nike Downshifter 7",
        price:"3500",
        image:"Images/images1.jpg"
    },
    {
        id:"2",
        name:"Nike Airforce",
        price:"1500",
        image:"Images/image2.jpg"
    },
    {
        id:"3",
        name:"New Balance",
        price:"2500",
        image:"Images/image3.jpg"
    },
    {
        id:"4",
        name:"Nike Infinity",
        price:"5500",
        image:"Images/image4.jpg"
    },
    {
        id:"5",
        name:"Nike Tanjun",
        price:"3500",
        image:"Images/image2.jpg"
    },
    {
        id:"6",
        name:"Nike Pegasus",
        price:"9000",
        image:"Images/image4.jpg"
    },
]


const data = document.getElementById('cardcontainer');
console.log(data)
const hello =()=>{
    for (let i = 0; i < postData.length; i++) {
        const div = document.createElement('div');
        div.classList.add('dd');
        div.innerHTML = `<div>
            <img src="${postData[i].image}" class="w-full h-auto">
            <div class="card flex flex-col items-center justify-center pt-2 bg-gray-700 pb-3">
                <p class="font-bold text-white">${postData[i].name}</p>
                <p class="font-semibold text-white">${postData[i].price}</p>
                <button class="bg-black text-white rounded-lg px-3 py-1"><a>Buy now</a></button>
            </div>
            </div>
        `
        data.appendChild(div);
    }
}
hello()




clicked=()=>{
    const searchbar=document.getElementById('search-bar').value;
    console.log(searchbar); 

    const place=document.getElementById('searchcontainer'); 
    place.innerHTML=" ";
    let filterdData = postData.filter(pd => pd.name.toLowerCase().trim().includes(searchbar.toLowerCase().trim()))
    console.log(filterdData)
    for(let i=0;i<filterdData.length;i++){
            const div = document.createElement('div');
            div.classList.add('dd');
            div.innerHTML = `<div>
                <img src="${filterdData[i].image}" class="w-full h-auto">
                <div class="card flex flex-col items-center justify-center pt-2 bg-gray-700 pb-3">
                    <p class="font-bold">${filterdData[i].name}</p>
                    <p class="font-semibold">${filterdData[i].price}</p>
                    <button class="bg-black text-white rounded-lg px-3 py-1"><a>Buy now</a></button>
                </div>
                </div>
                `
            place.appendChild(div);
                document.querySelector('.hh').style.display='none';
    }
}
















// const websiteData = [
//     {
//         type: 'header',
//         order: 1,
//         data: [{name: "shoes", id: 1}, {name: "phones"}]
//     },
//     {
//         type: "PList",
//         order: 2
//     }
// ]
