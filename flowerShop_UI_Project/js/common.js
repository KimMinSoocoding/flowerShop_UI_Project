   $(function(){
        $('.rolling').slick({
            dots:false,
            slidesToShow: 1,
            slidesToScroll:1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: false,
            vertical: false,
            arrows: true,
            prevArrow: "<a>Prev</a>",
            nextArrow: "<a>Next</a>",
            prevArrow: '<i class="xi-angle-left-min prev-btn"></i>',
            nextArrow: '<i class="xi-angle-right-min next-btn"></i>'
        }); 
    });


    function sigin(){
        let id = document.getElementById("id");
        let pw = document.getElementById("pw")
        
        if (id.value.trim().length <= 4){
            alert("아이디를 5글자 이상으로 입력해주세요")
            return false;
        }else if(pw.value.trim().length <= 4){
            alert("비밀번호를 5글자 이상으로 입력해주세요")
            return false;
        }
        document.sigin_frm.submit();
    }
    
    function siginup(){
        let userid = document.getElementById("userid");
        let siginUpPw = document.getElementById("siginUpPw");
        let siginUpPw2 = document.getElementById("siginUpPw2");
        let siginUpName = document.getElementById("siginUpName");

        if (userid.value.trim().length <= 4){
            alert("아이디를 5글자 이상으로 입력해주세요")
            return false;
        }else if(siginUpPw.value.trim().length <= 4){
            alert("비밀번호를 5글자 이상으로 입력해주세요")
            return false;
        }else if(siginUpPw2.value !== siginUpPw.value){
            alert("비밀번호와 비밀번호 확인이 서로 일치하지 않습니다")
            return false;
        }else if(siginUpName.value.trim().length <= 1){
            alert("이름을 2글자 이상 입력해주세요")
            return false;
        }else {
            alert("회원가입을 축하합니다")
        }
        document.siginUp_frm.submit();
    }

    function writer(){
        let writer_title = document.getElementById("writer_title");
        let writer_detail = document.getElementById("writer_detail");

        if(writer_title.value.trim().length == 0){
            alert("제목을 입력하세요")
            return false;
        }else if(writer_detail.value.trim().length == 0){
            alert("내용을 입력하세요")
            return false;
        }
        
        document.writer_frm.submit();
    }

    $(function(){

        $(".dropDown").hover(function(){
            $(".none-dropDown").stop().show(100);
        })

        $(".dropDown").mouseleave(function(){
            $(".none-dropDown").stop().hide(100);
        })

    })

  