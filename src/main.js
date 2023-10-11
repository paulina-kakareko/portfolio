import smallStar from './images/little_star.svg'
import image1 from './images/github-image1.svg'
import image2 from './images/github-image2.svg'

console.log('coscos')



const username = 'paulina-kakareko'
const projectsContainer = document.querySelector('.projects--js')
const direction = 'desc'

fetch('https://api.github.com/users/paulina-kakareko/repos?direction=desc')
.then(response => response.json())
.then(response => {
    for (let repository of response) {
        const {name, html_url, description, stargazers_count, topics, homepage} = repository;
        let tags = ``;
        for (tag of topics) {
            tags += `<li class="bg-gray-400/10 py-2 px-2 rounded text-sm font-bold">${tag}</li>`
        };
        const element = `<article class="bg-gradient-to-br from-white/10 to-white/5 rounded-[0.625rem] md:rounded-5 overflow-clip">
        <div class="h-11 bg-gradient-to-br from-white/10 to-white/5 p-4 flex gap-1.5 shadow-innerlight rounded-t-[0.625rem] md:rounded-t-5 border-b border-bg">
            <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
            <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
            <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
        </div>
        <div class="p-5 md:p-10">
            <header class="flex gap-4 items-center mb-4">
                <h3 class="text-2xl leading-none font-bold">${name}</h3>
                <p class="bg-gray-400/10 py-1 px-2 rounded flex gap-0.5 items-center text-gray-400 font-medium leading-none"><img class="w-4 h-4" src="${smallStar}" alt="">${stargazers_count}</p>
            </header>
        <p class="text-gray-400 text-xl mb-4">${description}</p>
        <ul class="flex gap-2 mb-10 flex-wrap">
       ${tags}
        </ul>
        <div class='flex gap-4 flex-col md:flex-row items-start'>
            <a target="_blank" rel="noreferrer nofollow" class='bg-bg text-white flex gap-2 font-bold  py-4 px-5 rounded-[0.625rem] ring-lightGray ring-2 md:text-xl' href="${homepage}"><img class='w-6 h-6' src="${image1}" alt="">View demo</a>
            <a target="_blank" rel="noreferrer nofollow" class='bg-bg text-white flex gap-2 font-bold  py-4 px-5 rounded-[0.625rem] ring-lightGray ring-2 md:text-xl' href="${html_url}"><img class='w-6 h-6' src="${image2}" alt="">Source code</a>
        </div>
    </div>
    </article>`;
   if (homepage)
        projectsContainer.insertAdjacentHTML('afterbegin', element)
    }
})
.catch((e) => console.log(e))

