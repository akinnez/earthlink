let initialTogg = true;
let accordion = document.querySelector(".accordion-cont");


let footerCont = {
    Internet:[
        {text:'High-Speed Internet', link: '/internet/home-internet/'},
        {text:'Fiber Internet', link: '/internet/fiber-internet/'},
        {text:'Wireless Home Internet', link: '/internet/wireless-home-internet/'},
        {text:'Satellite Internet', link: '/internet/satellite-internet/'},
        {text:'Rural Internet', link: '/internet/rural-internet/'},
        {text:'Internet Near Me', link: '/internet/internet-near-me/'},
    ],
    EarthLink:[
        {text:"About Us", link: '/about-us'},
        {text:"Contact", link: '/about-us/contact'},
        {text:"Blog", link: '/blog'},
        {text:"Careers", link: '/about-us/careers'},
        {text:"Terms & Conditions", link: '/tcs'},   
    ],
    Help:[
        {text:"Support", link: '/help'},
        {text:"Live Chat", link: '/live-chat'}
    ],
    Account:[
        {text:"My Account", link: '/my-account'},
        {text:"WebMail", link: '/webmail'},
        {text:"My EarthLink", link: '/my-earthlink'}, 
    ]

}

for (let index = 0; index < Object.keys(footerCont).length; index++) {
    accordion.innerHTML += 
    `
    <div class="accordion" id="accordionExample">
                    <div class="accordion-item border border-0 drop">
                        <div class="accordion-header w-100 d-flex text-white">
                            <h5 class="m-0 p-0 " style="width:100%; max-width: 300px;" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">${Object.keys(footerCont)[index]}
                            </h5>
                            <button class="btn play-pause" id="" onclick="toggleButton(${index})"
                                style="width:100%; max-width: 1099px; display: flex;justify-content: end;" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true"
                                aria-controls="collapse${index}">
                            </button>
                        </div>
                        <div id=collapse${index} class="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body p-0 ">
                                <ul class="pb-3 px-0  ul${index}"></ul>
                            </div>
                        </div>
                    </div>
                </div>
    
    ` 
}


let toggButton = document.querySelectorAll(".play-pause");
let ul0 = document.querySelectorAll('.ul0');
let ul1 = document.querySelectorAll('.ul1');
let ul2 = document.querySelectorAll('.ul2');
let ul3 = document.querySelectorAll('.ul3');

setTimeout(display);

function display(params) {
    for (let i = 0; i < ul0.length; i++) {
        for (let index = 0; index < footerCont.Internet.length; index++) {
            ul0[i].innerHTML += `<a href=${footerCont.Internet[index].link} class="list"><li>${footerCont.Internet[index].text}</li></a>`;
        }
        for (let index = 0; index < footerCont.EarthLink.length; index++) {
            ul1[i].innerHTML += `<a href=${footerCont.EarthLink[index].link} class="list"><li>${footerCont.EarthLink[index].text}</li></a>`;
        }
        for (let index = 0; index < footerCont.Help.length; index++) {
            ul2[i].innerHTML += `<a href=${footerCont.Help[index].link} class="list"><li>${footerCont.Help[index].text}</li></a>`;
        }
        for (let index = 0; index < footerCont.Account.length; index++) {
            ul3[i].innerHTML += `<a href=${footerCont.Account[index].link} class="list"><li>${footerCont.Account[index].text}</li></a>`;
        }
    }
}

function toggleButton(i) {
    initialTogg = !initialTogg;
    if (initialTogg) return toggButton[i].className = "btn play"; 
    return toggButton[i].className = "btn pause"  
}
