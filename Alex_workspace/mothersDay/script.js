new Vue({
    el: '#app',
    data: {
        showFlower: true
    },
    mounted() {
        var flower = document.querySelector('#flower');
        flower.style.animationName = 'bloom';

        flower.addEventListener('animationend', () => {
            this.showFlower = false;
        });
    }
});