const busrger = () => {
    document.querySelector('.burger').addEventListener('click', function(){
        this.classList.toggle('active');
        document.querySelector('.nav__list').classList.toggle('open')
    })
}

export default busrger