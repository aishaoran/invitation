var invitation = new Vue({
    el: "#invitation",
    data: {
        wrapShow: false,
    },
    mounted() {
        var imgL = $('#wrap img').length;//获取当前的img 个数
        var Deg = 360 / imgL; //  imgL个img平均分配360°
        var roY = 0, roX = -10, xN, yN;
        $('#wrap img').each(function (i) {//遍历 $('#wrap img')----改变他们的css样式
            //旋转角度定位以及禁止拖拽复制							Z轴到的距离，图片到中心点(350)
            $(this).css('transform', 'rotateY(' + i * Deg + 'deg) translateZ(350px)')
                .attr('ondragstart', 'return false');
        });

    },
    methods: {}
})