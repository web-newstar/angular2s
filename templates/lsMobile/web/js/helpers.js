//检测设备设置font-size
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = (clientWidth / 6.4) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);

//个人 中介 切换
$(function(){
    $("#personal-but").click(function() {
      $(this).addClass("active").siblings().removeClass("active");
      $(".agency-tip").hide();
      $("#submit_reg").attr("flag","flase");
      $("#submit_reg").html("立即注册");
      $(".form-wrap02").hide();
      $(".form-wrap").show();
    });
    $("#agency-but").click(function(){
       $(this).addClass("active").siblings().removeClass("active");
       $(".agency-tip").show();
       $("#submit_reg").attr("flag","true");
       $("#submit_reg").html("下一步");
    });

    //注册 登录验证
    //显示提示框，目前三个参数(txt：要显示的文本；time：自动关闭的时间（不设置的话默认1500毫秒）；status：默认0为错误提示，1为正确提示；)
    function showTips(txt,time,status)
    {
      var htmlCon = '';
      if(txt != ''){
        if(status != 0 && status != undefined){
          htmlCon = '<div class="tipsBox" style="width: 2rem;height:1.48rem;background: rgba(0,0,0,0.7);border-radius:0.06rem;color:#fff;box-shadow:0 0 3px #ddd inset;-webkit-box-shadow: 0 0 3px #ddd inset;text-align:center;position:fixed;top:25%;left:50%;z-index:999999;margin-left:-1rem;">'+'<svg class="icon-fork02">'+'<use xlink:href="#icon-fork02">'+'</use>'+'</svg>'+txt+'</div>';
        }else{
          htmlCon = '<div class="tipsBox" style="width: 2rem;height:1.48rem;background: rgba(0,0,0,0.7);border-radius:0.06rem;color:#fff;box-shadow:0 0 3px #ddd inset;-webkit-box-shadow: 0 0 3px #ddd inset;text-align:center;position:fixed;top:25%;left:50%;z-index:999999;margin-left:-1rem;">'+'<svg class="icon-fork02">'+'<use xlink:href="#icon-fork02">'+'</use>'+'</svg>'+txt+'</div>';
        }
        $('body').prepend(htmlCon);
        if(time == '' || time == undefined){
          time = 1000; 
        }
        setTimeout(function(){ $('.tipsBox').remove(); },time);
      }
    }
    
    $(function(){
      //注册验证
      $("#submit_reg").click(function(){
        var phone = $("#phone").val();
        var passwd = $("#password").val();
        //var passwd2 = $("#password2").val();
        var verifyCode = $("#verify_code").val();
        var phoneReg = /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/;
        if(phone == ""){
          showTips("请填手机号码");
        }else if(!phoneReg.test(phone)){
          showTips("您的手机格错误");
        }else if(verifyCode == ""){
          showTips("请输入验证码~");
        }else if(passwd == ""){
          showTips("请填密码~");
        }/*else if(passwd2 == ""){
          showTips("请再次输入您的密码~");
        }else if(passwd != passwd2 || passwd2 != passwd){
          showTips("两次密码输入不一致呢~");
        }*/else if($(this).attr("flag") == "true"){
          //下一步判断
          $(".form-wrap02").show();
          $(".form-wrap").hide();
          //showTips("注册成功进入下一步",2500,1);
          //此处省略 ajax 提交表单 代码...
        }else{
          $(".form-wrap02").hide();
        }
      });
      //登录验证
      $("#submit_login").click(function(){
        var phone = $("#phone").val();
        var passwd = $("#password").val();
        var phoneReg = /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/;
        if(phone == ""){
          showTips("请填手机号码");
        }else if(!phoneReg.test(phone)){
          showTips("手机格式错误");
        }else if(passwd == ""){
          showTips("请填密码~");
        }
      });
      //提交审核验证
      $("#submit_reg02").click(function(){
        var quanc = $("#quanc").val();
        var jianc = $("#jianc").val();
        var qux = $("#qux").val();
        var lianxr = $("#").val();
        var menddz = $("#menddz").val();
        var guddh = $("#guddh").val();
        var pic_upload = $(".upload-wrap img").attr("src");
        if(quanc == "" || jianc =="" || qux =="" || lianxr == "" || menddz =="" || guddh == "" || pic_upload == ""){
          showTips("带星号必填");
        }else{
          $(".reg-success").show();
          $(".form-wrap,.form-wrap02,.reg-choose").hide();
        }
       
      });
    });
  });
//首页发布
$(function(){
  $("#index_fb").click(function(){
    //alert(11);
    $(".index-release-wrap").slideDown();
  });
  $("#shut-down").click(function(){
    $(".index-release-wrap").slideUp();
  });
});
//列表筛选
$(document).ready(function(){
  //省略文本
   function subStr(obj){
      var maxwidth=4;
        if(obj.length>=maxwidth){
          obj=obj.substring(0,3,maxwidth);
          obj=obj+'…';
        return obj;
        }else{
            return obj;
        }
    }
    //类型切换 
    $(".screening-box span a").click(function() {
      var typeSpan = $(this).parent("span");
      var typeState = typeSpan.hasClass("active");
      if (typeState == true) {
        typeSpan.removeClass("active");
      } else {
        typeSpan.addClass("active").siblings("span").removeClass("active");
      }
    });
    //内容盒子切换
    $("#locationList").click(function(){
      $(".locationCon").slideToggle();
      $(".priceCon,.areaCon,.moreCon,.validationCon,.typeCon").hide();
    });
    $("#priceList").click(function(){
      $(".priceCon").slideToggle();
      $(".locationCon,.areaCon,.moreCon,.validationCon,.typeCon").hide();
    });
    $("#areaList").click(function(){
      $(".areaCon").slideToggle();
      $(".priceCon,.locationCon,.moreCon,.validationCon,.typeCon").hide();
    });
    $("#moreList").click(function(){
      $(".moreCon").slideToggle();
      $(".priceCon,.areaCon,.locationCon,.validationCon,.typeCon").hide();
    });
    $("#validationList").click(function(){
      $(".validationCon").slideToggle();
      $(".priceCon,.areaCon,.locationCon,.moreCon,.typeCon").hide();
    });
    $("#typeList").click(function(){
      $(".typeCon").slideToggle();
      $(".priceCon,.areaCon,.locationCon,.moreCon,.validationCon").hide();
    });
    //区域选择
    $(".locationList-box li").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $("#locationList em").text(subStr($(this).html()));
    });
     //价格选择
    $(".priceList-box li").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $("#priceList em").text(subStr($(this).html()));
    });
     //面积选择
    $(".areaList-box li").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $("#areaList em").text(subStr($(this).html()));
    });
     //更多选择
    $(".moreList-box li span").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });
    //验证房源
    $(".validationList-box li").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $("#validationList em").text(subStr($(this).html()));
    });
    //类型
    $(".typeList-box li").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $("#typeList em").text(subStr($(this).html()));
    });
    //清空筛选条件
    $("#filtrate-reset").click(function(){
      $("#moreList em").text("更多");
      $(".moreList-box li span").removeClass("active");
    });
    //确定
    $(".determine-but").click(function(){
      $(".moreCon").hide();
      $(".screening-box span").removeClass("active");
      var moreName = $(".moreType1 li .active").html();
      var moreName2 = $(".moreType2 li .active").html();
      //alert(moreName);
      if(moreName2==null){
        $("#moreList em").text(subStr(moreName));
      }else{
        //subStr($("#moreList em").text(moreName + moreName2));
        $("#moreList em").text(subStr(moreName + moreName2));
      }
    });
});
//发布房源  发布求购
$(function(){
  //select 选值颜色修改
  $(".fb-list-wrap select").change(function(){
    $(this).css('color','#333')
  });
  //点击下一步
  $("#next_step").click(function(){
    $(".fb-list-wrap .step-box-1").hide();
    $(".fb-list-wrap .step-box-2").show();
    //返回上一步
    $(".on_page01").attr("id","on_page01");
    $("#on_page01").click(function(){
      $(".fb-list-wrap .step-box-1").show();
      $(".fb-list-wrap .step-box-2").hide();
    });

    $("#next_step02").click(function(){
      $(".fb-list-wrap .step-box-1").hide();
      $(".fb-list-wrap .step-box-2").hide();
      $(".fb-list-wrap .step-box-3").show();
      //返回上一步
      $(".on_page01").attr("id","on_page02");
      $("#on_page02").click(function(){
        $(".on_page01").attr("id","on_page01");
        $(".fb-list-wrap .step-box-1").hide();
        $(".fb-list-wrap .step-box-2").show();
        $(".fb-list-wrap .step-box-3").hide();
        $("#on_page01").click(function(){
          $(".fb-list-wrap .step-box-1").show();
          $(".fb-list-wrap .step-box-2").hide();
        });
      });
    });
  });
  $("#fb_submit").click(function(){
    $(".fb-list-wrap .list-form").hide();
    $(".fb-list-wrap .fb-success").show();
  });
});

//我的发布 我的收藏
//Tab
$(function(){
  var $tab_munu = $(".ad-fb,.ad-sc");
  $tab_munu.hover(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var index = $tab_munu.index(this);
    $(".ad-tab-conList > div").eq(index).show().siblings().hide();
  });

  //信息修改删除
  $("#xg_delete").click(function(){
    $("#title_con").html("").hide();
    $("#title_input").show();
  });
});
//详情页控制li+margin-bottom
$(document).ready(function(){
  var byteNum = $(".special-li02 span").text().length;
  var specialLi02 = $(".special-li02");
  //alert( byteNum);
  if(byteNum>24 & byteNum<48){
    specialLi02.css("margin-bottom","0.3rem");
  }else if(byteNum>48 & byteNum<70){
    specialLi02.css("margin-bottom","0.6rem");
  }else if(byteNum > 70){
    specialLi02.css("margin-bottom","1rem");
  }
});
