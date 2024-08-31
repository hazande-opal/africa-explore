// Save the data
export const sites = [{
    id: 'qsg450l',
    areaName : 'Maasai Mara',
    thumbnail : 'pexels-abdullatif-bukeni-1296376-16168264.jpg',
    videoSource : 'Apple.mp4' 
},{
    id: '1fn7s15',
    areaName : 'Morocco',
    thumbnail : 'Morocco.jpg',
    videoSource : '' 
},{
    id: 'w2zv1bk',
    areaName : 'Namibia',
    thumbnail : 'Namibia.jpg',
    videoSource : '' 
},{
    id: 'ze3zvrk',
    areaName : 'Botswana',
    thumbnail : 'Botswana.jpg',
    videoSource : '' 
},{
    id: 'w2fb6hk',
    areaName : 'Egypt',
    thumbnail : 'Egypt.jpg',
    videoSource : '' 
},{
    id: 's0xy4tj',
    areaName : 'Serengeti',
    thumbnail : 'Serengeti.jpg',
    videoSource : '' 
},{
    id: 'cfs99ac',
    areaName : 'Mombasa',
    thumbnail : 'Mombasa.jpg',
    videoSource : 'NAture.mp4' 
},{
    id: '12xs3fk',
    areaName : 'Victoria Falls',
    thumbnail : 'Victoria Falls.jpg',
    videoSource : 'NAture.mp4' 
}
]

// Generate the data
let html = '';

sites.forEach((site) => {
    html += `
     <div class="h-72 cursor-pointer relative video-container js-video-container-${site.id}" data-site-id="${site.id}">
        <img class="h-full w-full cursor-pointer thumbnail js-thumbnail-${site.id}" src="${site.thumbnail}" alt="">
        <video class="h-full w-full object-cover cursor-pointer video-content js-video-content-${site.id} hidden" muted autoplay loop src="${site.videoSource}">
            <source src="${site.videoSource}" type="video.mp4">
        </video>
        <div class=" font-bold font-sans cursor-pointer uppercase text-white h-20 top-32 right-0 left-0 flex items-center justify-center absolute text-md">
               ${site.areaName} 
        </div>
    </div>
    `;
})

// Make it interactive
document.querySelector('.js-video-grid').innerHTML = html;

// Automatically Plays background video on mouse enter and pauses and resets video on mouse exit
document.querySelectorAll('.video-container').forEach((container) => {
    container.addEventListener('mouseenter', () => {
        const siteId = container.dataset.siteId;
        const videoContainer = document.querySelector(`.js-video-container-${siteId}`);
        const video = document.querySelector(`.js-video-content-${siteId}`)
        const thumbnail = document.querySelector(`.js-thumbnail-${siteId}`)
        
        thumbnail.style.display = 'none';
        video.style.display = 'block';
        video.play();
    })

    container.addEventListener('mouseleave', () => {
        const siteId = container.dataset.siteId;
        const videoContainer = document.querySelector(`.js-video-container-${siteId}`);
        const video = document.querySelector(`.js-video-content-${siteId}`)
        const thumbnail = document.querySelector(`.js-thumbnail-${siteId}`)

        thumbnail.style.display = 'block';
        video.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    })
})

