const pages = document.querySelectorAll('.IU')
const sites = document.querySelectorAll('.IU1')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        entry.target.classList.toggle('show-1', entry.isIntersecting)
        entry.target.classList.toggle('show-2', entry.isIntersecting)

        /* if you don't want your site fading back out uncomment the next line*/
        // if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        /*you can play around with the root, rootMargin depending on your site speed and networ speed*/
        rootMargin: '-150px',
        threshold: 0,
    }

)


pages.forEach(page => {
    observer.observe(page)
})
sites.forEach(site => {
    observer.observe(site)
})