
    function show()  
        {  
            $.ajax({  
                url: "transfer/temp-1.php",  
                cache: false,  
                success: function(html){  
                    $("#content").html(html); 
				}
             }); 
           $.ajax({  
                url: "transfer/temp-2.php",  
                cache: false,  
                success: function(html){  
                    $("#content-1").html(html); 
                }
             }); 
             
             $.ajax({  
                url: "transfer/ledstate.php",  
                cache: false,  
                success: function(html){  
                    $("#content-3").html(html); 
                    if(html=="<p class='on'>ON</p>"){
                        $("#termSwitch").prop('checked',true);
                    }
                    if(html=="<p class='off'>OFF</p>"){
                        $("#termSwitch").prop('checked', false);
                    }
                }
             }); 
             //запрос для выстановления переключателя в нужное положение
            //  $.ajax({  
            //     url: "transfer/ledstate.php",  
            //     cache: false,  
            //     success: function(html){  
            //         if(html=="<p class='on'>ON</p>"){
            //             $("#termSwitch").attr('checked',true);
            //         }
            //     }
            //  }); 
             
        }
        
        jQuery(document).ready(function(){  
            show();  
            setInterval('show()',500);  
        }); 
        
 
      


      