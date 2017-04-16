// import $ from 'zepto';
export default {
    bind(el,binding){
        var $el = $(el);
        console.log($el)
        $el.on('scroll',()=>{
            var height = parseFloat($el.height()),
                scrollTop = parseFloat($el.scrollTop()),
                allHeight = height + scrollTop;
                console.log(`${$el.height()}-${$el.scrollTop()}-${$el[0].scrollHeight}`);
            if($el[0].scrollHeight - allHeight <= 3){
                console.log(`${$el.height()}-${$el.scrollTop()}-${$el[0].scrollHeight}`);
                console.log(this)
                console.log(binding)
                // this.vm[this.expression]();
            }
        })
    }
}