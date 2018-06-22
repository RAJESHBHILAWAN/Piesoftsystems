$(document).ready(function () {


$(document).on('keydown input', ".cls_alphaNumericWithSpaces", function (e) 
{
    if (	!((e.which >=48  && e.which <=57)	||	(e.which >=65  && e.which <=90)	||	(e.which >=97  && e.which <=122)	||	e.which == 32	||	e.which == 8	|| e.which == 9	|| e.which == 13	||	e.which	== 16	||	e.which == 20	||	e.which == 16	||	e.which == 35	||	e.which == 36	||	e.which == 37	||	e.which == 38	||	e.which == 39	||	e.which == 40)	) 
    {
        return false;
    }
});
$(".cls_alphaNumericWithSpaces").blur(function (e) 
{
    for(var i=0;i<$(this).val().length-1;i++)
    {
        $(this).val(	$(this).val().replace("  ", " ")	);
    }
    $(this).val(	$(this).val().trim()	);
});
	
	
$(document).on('keydown input', ".cls_alphaNumericWithoutSpaces", function (e) 
{
    if (	!((e.which >=48  && e.which <=57)	||	(e.which >=65  && e.which <=90)	||	(e.which >=97  && e.which <=122)	||	e.which == 8	|| e.which == 9	|| e.which == 13	||	e.which	== 16	||	e.which == 20	||	e.which == 16	||	e.which == 35	||	e.which == 36	||	e.which == 37	||	e.which == 38	||	e.which == 39	||	e.which == 40)	) 
    {
        return false;
    }
});
$(".cls_alphaNumericWithoutSpaces").blur(function (e) 
{
    for(var i=0;i<$(this).val().length-1;i++)
    {
        $(this).val(	$(this).val().replace(" ", "")	);
    }
    $(this).val(	$(this).val().trim()	);
});
	
	
	
$(document).on('keydown input', ".cls_textWithSpaces", function (e) 
{
    if (	!((e.which >=65  && e.which <=90)	||	(e.which >=97  && e.which <=122)	||	e.which == 32	||	e.which == 188	||	e.which == 8	|| e.which == 9	|| e.which == 13	||	e.which	== 16	||	e.which == 20	||	e.which == 16	||	e.which == 35	||	e.which == 36	||	e.which == 37	||	e.which == 38	||	e.which == 39	||	e.which == 40)	) 
    {
        return false;
    }
		
});
$(".cls_textWithSpaces").blur(function (e) 
{
    for(var i=0;i<$(this).val().length-1;i++)
    {
        $(this).val(	$(this).val().replace("  ", " ")	);
    }
    $(this).val(	$(this).val().trim()	);
});
	

$(document).on('keydown input', ".cls_textWithoutSpaces", function (e) 
{
    if (	!((e.which >=65  && e.which <=90)	||	(e.which >=97  && e.which <=122)	||	e.which == 8	|| e.which == 9	|| e.which == 13	||	e.which	== 16	||	e.which == 20	||	e.which == 16	||	e.which == 35	||	e.which == 36	||	e.which == 37	||	e.which == 38	||	e.which == 39	||	e.which == 40)	) 
    {
        return false;
    }
});
$(".cls_textWithoutSpaces").blur(function (e) 
{
    for(var i=0;i<$(this).val().length-1;i++)
    {
        $(this).val(	$(this).val().replace(" ", "")	);
    }
    $(this).val(	$(this).val().trim()	);
});
	
	
$(document).on('keydown input', ".cls_numbersOnly", function (e) 
{
    if (e.shiftKey)
    {
        event.preventDefault();
    }
    else
    {	
        if (	!((e.which >=48  && e.which <=57)	||	e.which == 8	|| e.which == 9	|| e.which == 13	||	e.which	== 16	||	e.which == 20	||	e.which == 16	||	e.which == 35	||	e.which == 36	||	e.which == 37	||	e.which == 38	||	e.which == 39	||	e.which == 40)	) 
        {
            return false;
        }
    }
});
$(".cls_numbersOnly").blur(function (e) 
{
    for(var i=0;i<$(this).val().length-1;i++)
    {
        $(this).val(	$(this).val().replace(" ", "")	);
    }
    $(this).val(	$(this).val().trim()	);
});
	
$(document).on('keydown input', ".cls_amountOnly", function (e) 
{
    if (e.shiftKey)
    {
        event.preventDefault();
    }
    else
    {	
        if (	!((e.which >=48  && e.which <=57)	||	e.which == 46	||	e.which == 110	||	e.which == 190	||	e.which == 188	||	e.which == 8	|| e.which == 9	|| e.which == 13	||	e.which	== 16	||	e.which == 20	||	e.which == 16	||	e.which == 35	||	e.which == 36	||	e.which == 37	||	e.which == 38	||	e.which == 39	||	e.which == 40)	) 
        {
            return false;
        }
    }
});
$(".cls_amountOnly").blur(function (e) 
{
    for(var i=0;i<$(this).val().length-1;i++)
    {
        $(this).val(	$(this).val().replace(" ", "")	);
        $(this).val(	$(this).val().replace("..", ".")	);
        $(this).val(	$(this).val().replace(" ", "")	);		//--------- shud check for only single decimal ----------- PENDING---------
    }
    $(this).val(	$(this).val().trim()	);
});
	
	
	
	
	
	
$(document).on('keydown input', ".cls_emailOnly", function (e) 
{
		
			
    firstAtAt = $(this).val().indexOf("@") + 1;
    var beforeAt = $(this).val().substring(0, firstAtAt);
    var remainingCheckinAt = $(this).val().substring(	firstAtAt, $(this).val().length		);
    document.title = remainingCheckinAt;
    if(		remainingCheckinAt.indexOf("@")	>= 0	)
    {	
				
				
				
				
				
				
				
				
        firstDotAt = remainingCheckinAt.indexOf(".") + 1;
        var beforeDot = remainingCheckinAt.substring(0, firstDotAt);
        var remainingCheckinDot = remainingCheckinAt.substring(	firstDotAt, $(this).val().length		);
        document.title = remainingCheckinDot;
        if(		remainingCheckinDot.indexOf(".")	>= 0	)
        {	
            remainingCheckinDot = beforeDot + remainingCheckinDot.replace(".", "");
            document.title = remainingCheckinDot;
        }
				
				
        remainingCheckinDot = remainingCheckinDot.replace("@", "");
        remainingCheckinAt = beforeAt + remainingCheckinDot;		
				
				
				
        document.title = remainingCheckinAt;
        $(this).val(remainingCheckinAt);
				
				
				
				
				
				
				
				
				
				
				
    }
			
			





    /* 				if(	!(e.which >=65  && e.which <=90)	||	(e.which >=97  && e.which <=122)	)
                    {
                        
                        return false;
                    }
            
     */


			
});
$(".cls_emailOnly").blur(function (e) 
{
		
    for(var i=0;i<$(this).val().length-1;i++)
    {
        $(this).val(	$(this).val().replace(" ", "")	);
    }
    $(this).val(	$(this).val().trim()	);
    if($(this).contains("@") == false)
    {
        showFormAlert("SureTrader", "Invalid email address", "");
    }
});
	
$(document).on('blur',	'select.cls_required', function(e)
{
    if(	$(this)[0].selectedIndex	== 0	)
    {
        var w1 = $(this).parent().width();
        $(this).parent().after("<span class='cls_redError' style='font-weight:normal; display:block; border-radius:0px 0px 10px 10px; position:absolute; width:" + w1 + "px; background:#E05E22; text-align:center; border:0px solid black; margin-top:-18px; color:#fff; font-size:0.8em;'>Invalid entry</span>");
        $(this).parent().next("span.cls_redError").fadeOut(3000);
        //$(this).fireEvent("onmousedown");
      //  $(this).focus();
    }
    else
    {
        if	($("#id_showFormAlert_Base").css("top") > "-500px"	)
            rollUpMsg1();
    }
});
$(document).on('blur',	'input[type=text].cls_required', function(e)
{
    if(	 $(this).val().trim() == ""	)
    {
        var w1 = $(this).parent().width();
        $(this).parent().after("<span class='cls_redError' style='font-weight:normal; display:block; border-radius:0px 0px 10px 10px; position:absolute; width:" + w1 + "px; background:#E05E22; text-align:center; border:0px solid black; margin-top:-18px; color:#fff; font-size:0.8em;'>Invalid entry</span>");
        $(this).parent().next("span.cls_redError").fadeOut(3000);
        //alert("ok");
     //   $(this).focus();
    }
    else
    {
        if	($("#id_showFormAlert_Base").css("top") > "-500px"	)
            rollUpMsg1();
    }
});

	
	
	
});