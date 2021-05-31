{/* <div class="user-inbox inbox">
               
<div class="msg-header">
    <p>hello,there i m sender</p>
</div>
</div> */}
$(document).ready(function(){
    $('#send-btn').on('click',function(){
        $value=$('#data').val();
        // alert($value);
        $msg= '<div class="user-inbox inbox"> <div class="msg-header"> <p>'+$value+'</p> </div> </div> ';
        $(".form").append($msg);
        $('#data').val('');

        // start of ajax
        $.ajax({
            url:'message.php',
            type:'post',
            data:'text='+$value,
            success:function(data){
               
                $replay = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>'+data+'</p></div></div>';
                $(".form").append($replay);
                // control scroll bar
                $(".form").scrollTop($(".form")[0].scrollHeight);
            }
       
        });
    });
});