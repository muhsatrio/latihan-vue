const fruitMixins = {
    data() {
        return {
            text: 'Asdasdasd',
            fruits: ['pepaya', 'mangga', 'jambu', 'pisang'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    },
}

export default fruitMixins;