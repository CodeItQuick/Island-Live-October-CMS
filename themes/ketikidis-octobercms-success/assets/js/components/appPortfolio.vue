<script>

    Vue.component('portfolio', {
        template: '#image-render',
        data: function () {
            return {
                hello: 'Hello'
            }
        }
    })

    export default {
        components: {
            appPortfolio: portfolio
        }
    }
</script>
