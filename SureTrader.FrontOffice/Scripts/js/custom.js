


$(document).ready(function()
{
	

	showInputInfo = function(myElementId, myInfoTitle, myInfoMsg)
	{
		var myId = "#" + myElementId;
		var L = Math.round(	$(myId).offset().left	);
		var T = Math.round(	$(myId).offset().top	);
		var W = Math.round(	$(myId).width()	);
		var H = Math.round(	$(myId).height()	);
		
		$(".cls_inputInfo").css({"display":"block", "z-index":"99"});
		$(".cls_inputInfo").css({"left": L+W+(W/3)+5, "top":T});
		$(".cls_inputInfoTitle").text(myInfoTitle);
		$(".cls_inputInfoMsg").text(myInfoMsg);
		
		window.clearTimeout(isInputInfoVisibleTimer);
		isInputInfoVisibleTimer = window.setTimeout(hideInputInfo, 5000);
	}	
	
	hideInputInfo = function()
	{
	
		$(".cls_inputInfo").css({"display":"none"});
		$(".cls_inputInfoTitle").text("");
		$(".cls_inputInfoMsg").text("");
	}
	
	$("#id_close_inputInfo").click(function(e)
	{
		hideInputInfo();
	});
	
	var isInputInfoVisibleTimer = window.setTimeout(hideInputInfo, 5000);

	
	//------------- accountcenter_primary_applicant.php --------------------------

	
	
	
	//------------- accountcenter_form1.php --------------------------
	$(".cls_ac_part1_item").click(function()
	{
		$(".cls_ac_part1_item").css({"background":"#fff"}).children(".ac_form1_ok").css({"visibility":"hidden"});
		$(".cls_ac_part1_item").css({"background":"#fff"}).children(".cls_ac_part1_item_text").css({"color":"#333"});
		
		$(this).children(".ac_form1_ok").css({"visibility":"visible"});
		$(this).children(".cls_ac_part1_item_text").css({"color":"#6bc065"});
		
		$(this).css({"backgroundColor":"#eee"});
		$(this).css({"backgroundColor":"-webkit-linear-gradient(left, #fff, #eee)"}); 
		$(this).css({"background": "-webkit-linear-gradient(left, #fff, #eee)"});
		$(this).css({"background": "linear-gradient(left, #fff, #eee)"});
	});
	
	$("#id_q_ac_form1").click(function()
	{
		showInputInfo("id_q_ac_form1", "Withdrawal PIN", "Information here...")
	});

	//------------- Index.php --------------------------
	passwordResetDIVResizeAdjust = function()
	{
		$(".cls_reset_password").css({"width": $(".cls_signinToggle").width()	});
		LResetPassword = $(".cls_signinToggle").offset().left;
		TResetPassword = $(".cls_signinToggle").offset().top;
		HResetPassword = $(".cls_signinToggle").height();
		$(".cls_reset_password").css({"position":"absolute", "left": LResetPassword, "top": TResetPassword	});
	}
	
	$(window).resize(function()
	{
		passwordResetDIVResizeAdjust();
	});
	
	$(".cls_reset_password").css({"visibility":"hidden"});
	
	//passwordResetDIVResizeAdjust();
	
	$(".cls_reset_password_cancel_link").click(function()
	{
		$(".cls_reset_password").fadeTo("slow", 0.0, function()
		{
			$(".cls_reset_password").css({"visibility":"hidden"});
			$(".cls_signinToggle").css({"visibility":"visible"}).fadeTo("fast", 1.0);
		});
	});
	
	$(".cls_reset_password_link").click(function()
	{
		$(".cls_signinToggle").fadeTo("slow", 0.0, function()
		{
			LResetPassword = $(".cls_signinToggle").offset().left;
			TResetPassword = $(".cls_signinToggle").offset().top;
			HResetPassword = $(".cls_signinToggle").height();
			$(".cls_reset_password").css({"position":"absolute", "left": LResetPassword, "top": TResetPassword	});

			$(".cls_signinToggle").css({"visibility":"hidden"});
			$(".cls_reset_password").css({"visibility":"visible"}).fadeTo("fast", 1.0);
		});
		
	}); 
	
	$(".cls_ckhbox_parent").click(function()
	{
		if (	$(this).children(".cls_ckhbox").is(":checked") == true	)
		{
			$(this).css({"background":"#fff url(/images/chkbox.png) no-repeat", "background-size":"80%", "background-position":"center"});	
		}
		else
		{
			$(this).css({"background":"#fff"});	
		}
		
	});
	
	//$('[data-EAS="tooltip"]').tooltip(); 

	var validationField="";
	showFormAlert = function(title1, msg1, field1)
	{
		$("div[data-validation='"+validationField+"']").css({"color":"#000"});
		
		$("#id_showFormAlert_Title").text(title1);
		$("#id_showFormAlert_Msg").text(msg1);
		$("#id_showFormAlert_Base").css({"display":"block"}).animate({"top":"0px"});
		
		validationField = field1;
		$("*[data-validation='"+field1+"']").css({"color":"#f77"});
		rollUpMsg();
	}
	var timerValidate;
	rollUpMsg = function()
	{
		timerValidate = window.setTimeout(rollUpMsg1, 3000);
	}
	rollUpMsg1 = function()
	{
		window.clearTimeout(timerValidate);
		$("#id_showFormAlert_Base").animate({"top":"-500px"}, "slow", function()
		{
			$("#id_showFormAlert_Base").css({"display":"none"});
			$("div[data-validation='"+validationField+"']").css({"color":"#000"});
			//$('*:data(validation)').css({"color":"#000"});
		});
	}
		
	
	//----------------- field validations ----------------
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
		//	$(this).focus();
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
		//	$(this).focus();
		}
		else
		{
			if	($("#id_showFormAlert_Base").css("top") > "-500px"	)
				rollUpMsg1();
		}
	});

	
	
	
});


 

 
