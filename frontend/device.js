jQuery(document).ready(function(){
    $('#termSwitch').click(function() {
    $.ajax({
    url: 'transfer/led.php', 
    method: 'post',
    dataType: 'html',
    data: $('#termSwitch').is(':checked') ? {status:true} : {status:false}
    });
    }); 
    });