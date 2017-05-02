$(function () {

    var itemIndex = 0;

    var tabLoadEndArray = [false, false, false];
    var tabLenghtArray = [28];
    //var tabScroolTopArray = [0, 0, 0];
    
    // dropload
    var dropload = $('.loadingListWrap').dropload({
        scrollArea: window,
        domDown: {
            domClass: 'dropload-down',
            domRefresh: '<div class="dropload-refresh">上拉加载更多</div>',
            domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData: '<div class="dropload-noData">已无数据</div>'
        },
        loadDownFn: function (me) {
            setTimeout(function () {
                if (tabLoadEndArray[itemIndex]) {
                    me.resetload();
                    me.lock();
                    me.noData();
                    me.resetload();
                    return;
                }
                var result = '';
                for (var index = 0; index < 5; index++) {
                    if (tabLenghtArray[itemIndex] > 0) {
                        tabLenghtArray[itemIndex]--;
                    } else {
                        tabLoadEndArray[itemIndex] = true;
                        break;
                    }
                    if (itemIndex == 0) {
                        result
                        += '' 
                        +'<div class="list-item">'
                        +'  <a href="">'
                        +'      <div class="pic-l">'
                        +'          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492059474091&di=9dc5d706009cca248dac3f794e13adbf&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff5%2F151%2F78.jpg"/>'
                        +'      </div>'
                        +'      <div class="txt-r">'
                        +'          <h3 class="area-name">' + tabLenghtArray[itemIndex] + '瑞虹新城瑞虹新城瑞虹1111111111111111</h3>'
                        +'          <div class="same-line">'
                        +'              <span class="color-9">3室1厅</span>&nbsp;|'
                        +'              <span class="color-9">130m²</span>&nbsp;|'
                        +'              <span class="color-9">迎园小区</span>'
                        +'          </div>'
                        +'          <div class="lable-tip">'
                        +'               <span class="lable">中介</span>'
                        +'               <span class="lable">验证房源</span>'
                        +'          </div>'
                        +'          <div class="price-line">'
                        +'              <span class="focus">1200万</span>'
                        +'              <span class="color-9">10000元/m²</span>'
                        +'          </div>'
                        +'      </div>'
                        +'  </a>'
                        +'</div>';

                    }
                }
                $('.loadingListPane').eq(itemIndex).append(result);
                me.resetload();
            }, 500);
        }
    });


    /*$('.tabHead span').on('click', function () {

        tabScroolTopArray[itemIndex] = $(window).scrollTop();
        var $this = $(this);
        itemIndex = $this.index();
        $(window).scrollTop(tabScroolTopArray[itemIndex]);
        
        $(this).addClass('active').siblings('.tabHead span').removeClass('active');
        $('.tabHead .border').css('left', $(this).offset().left + 'px');
        $('.khfxPane').eq(itemIndex).show().siblings('.khfxPane').hide();

        if (!tabLoadEndArray[itemIndex]) {
            dropload.unlock();
            dropload.noData(false);
        } else {
            dropload.lock('down');
            dropload.noData();
        }
        dropload.resetload();
    });*/
});