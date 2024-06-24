const btn = document.querySelector('#show-more')
const content = document.querySelector('#content')

btn.onclick = () => {
    if (!content.classList.contains('open')) {
        content.classList.add('open')
        btn.textContent = 'Collapse'
    } else {
        content.classList.remove('open')
        btn.textContent = 'Expand'
    }
}




// expand()