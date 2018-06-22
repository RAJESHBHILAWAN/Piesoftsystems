var totalFormFieldsIDs=[];
var filledFormFields=0;
var totalFormFieldsIDs_input = 0;
var totalFormFieldsIDs_select = 0;
var progressValue_ = "";


var software_dataFeeds_monthlyTotal = 0;



var id_radio_STWOP="";
$(".cls_green_radio_yes, .cls_green_radio_no").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
$(".cls_dataFeedsUnderHeadingDIV .cls_green_radio_no").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
$("#id_radio_STWOP_YES").click(function()
{
	$("#id_radio_STWOP_YES, #id_radio_STWOP_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_STWOP_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_STWOP = $(this).data("value");
});
$("#id_radio_STWOP_NO").click(function()
{
	$("#id_radio_STWOP_YES, #id_radio_STWOP_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_STWOP_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_STWOP = $(this).data("value");
});


var id_radio_dataExchangeFee1="";
$("#id_radio_dataExchangeFee1_YES").click(function()
{
	$("#id_radio_dataExchangeFee1_YES, #id_radio_dataExchangeFee1_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee1_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee1 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataExchangeFee1").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataExchangeFee1_NO").click(function()
{
	$("#id_radio_dataExchangeFee1_YES, #id_radio_dataExchangeFee1_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee1_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee1 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataExchangeFee1").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});

var id_radio_dataExchangeFee2="";
$("#id_radio_dataExchangeFee2_YES").click(function()
{
	$("#id_radio_dataExchangeFee2_YES, #id_radio_dataExchangeFee2_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee2_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee2 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataExchangeFee2").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataExchangeFee2_NO").click(function()
{
	$("#id_radio_dataExchangeFee2_YES, #id_radio_dataExchangeFee2_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee2_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee2 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataExchangeFee2").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});

var id_radio_dataExchangeFee3="";
$("#id_radio_dataExchangeFee3_YES").click(function()
{
	$("#id_radio_dataExchangeFee3_YES, #id_radio_dataExchangeFee3_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee3_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee3 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataExchangeFee3").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataExchangeFee3_NO").click(function()
{
	$("#id_radio_dataExchangeFee3_YES, #id_radio_dataExchangeFee3_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee3_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee3 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataExchangeFee3").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});

var id_radio_dataExchangeFee4="";
$("#id_radio_dataExchangeFee4_YES").click(function()
{
	$("#id_radio_dataExchangeFee4_YES, #id_radio_dataExchangeFee4_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee4_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee4 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataExchangeFee4").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataExchangeFee4_NO").click(function()
{
	$("#id_radio_dataExchangeFee4_YES, #id_radio_dataExchangeFee4_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee4_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee4 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataExchangeFee4").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});

var id_radio_dataExchangeFee5="";
$("#id_radio_dataExchangeFee5_YES").click(function()
{
	$("#id_radio_dataExchangeFee5_YES, #id_radio_dataExchangeFee5_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee5_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee5 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataExchangeFee5").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataExchangeFee5_NO").click(function()
{
	$("#id_radio_dataExchangeFee5_YES, #id_radio_dataExchangeFee5_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee5_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee5 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataExchangeFee5").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});

var id_radio_dataExchangeFee6="";
$("#id_radio_dataExchangeFee6_YES").click(function()
{
	$("#id_radio_dataExchangeFee6_YES, #id_radio_dataExchangeFee6_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee6_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee6 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataExchangeFee6").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataExchangeFee6_NO").click(function()
{
	$("#id_radio_dataExchangeFee6_YES, #id_radio_dataExchangeFee6_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee6_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee6 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataExchangeFee6").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});

var id_radio_dataExchangeFee7="";
$("#id_radio_dataExchangeFee7_YES").click(function()
{
	$("#id_radio_dataExchangeFee7_YES, #id_radio_dataExchangeFee7_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee7_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee7 = $(this).data("value");

	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataExchangeFee7").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataExchangeFee7_NO").click(function()
{
	$("#id_radio_dataExchangeFee7_YES, #id_radio_dataExchangeFee7_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataExchangeFee7_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee7 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataExchangeFee7").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});











var cls_radio_dataMarketDepthFee1="";
//$(".cls_green_radio_yes, .cls_green_radio_no").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});

$("#id_radio_dataMarketDepthFee1_YES").click(function()
{
	$("#id_radio_dataMarketDepthFee1_YES, #id_radio_dataMarketDepthFee1_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataMarketDepthFee1_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee1 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataMarketDepthFee1").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataMarketDepthFee1_NO").click(function()
{
	$("#id_radio_dataMarketDepthFee1_YES, #id_radio_dataMarketDepthFee1_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataMarketDepthFee1_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee1 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataMarketDepthFee1").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});

var cls_radio_dataMarketDepthFee2="";
//$(".cls_green_radio_yes, .cls_green_radio_no").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
$("#id_radio_dataMarketDepthFee2_YES").click(function()
{
	$("#id_radio_dataMarketDepthFee2_YES, #id_radio_dataMarketDepthFee2_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataMarketDepthFee2_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee2 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataMarketDepthFee2").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataMarketDepthFee2_NO").click(function()
{
	$("#id_radio_dataMarketDepthFee2_YES, #id_radio_dataMarketDepthFee2_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataMarketDepthFee2_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee2 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataMarketDepthFee2").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});

var cls_radio_dataMarketDepthFee3="";
//$(".cls_green_radio_yes, .cls_green_radio_no").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
$("#id_radio_dataMarketDepthFee3_YES").click(function()
{
	$("#id_radio_dataMarketDepthFee3_YES, #id_radio_dataMarketDepthFee3_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataMarketDepthFee3_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee3 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataMarketDepthFee3").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataMarketDepthFee3_NO").click(function()
{
	$("#id_radio_dataMarketDepthFee3_YES, #id_radio_dataMarketDepthFee3_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataMarketDepthFee3_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee3 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataMarketDepthFee3").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});

var cls_radio_dataMarketDepthFee4="";
//$(".cls_green_radio_yes, .cls_green_radio_no").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
$("#id_radio_dataMarketDepthFee4_YES").click(function()
{
	$("#id_radio_dataMarketDepthFee4_YES, #id_radio_dataMarketDepthFee4_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataMarketDepthFee4_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee4 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataMarketDepthFee4").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataMarketDepthFee4_NO").click(function()
{
	$("#id_radio_dataMarketDepthFee4_YES, #id_radio_dataMarketDepthFee4_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataMarketDepthFee4_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee4 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataMarketDepthFee4").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});

var cls_radio_dataMarketDepthFee5="";
//$(".cls_green_radio_yes, .cls_green_radio_no").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
$("#id_radio_dataMarketDepthFee5_YES").click(function()
{
	$("#id_radio_dataMarketDepthFee5_YES, #id_radio_dataMarketDepthFee5_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataMarketDepthFee5_YES").css({"background":"url(images/icn_green1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee5 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal + val1;
		$(".cls_radio_dataMarketDepthFee5").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});
$("#id_radio_dataMarketDepthFee5_NO").click(function()
{
	$("#id_radio_dataMarketDepthFee5_YES, #id_radio_dataMarketDepthFee5_NO").css({"background":"url(images/icn_default1.png) no-repeat", "background-size":"20px"});
	$("#id_radio_dataMarketDepthFee5_NO").css({"background":"url(images/icn_orange1.png) no-repeat", "background-size":"20px"});
	id_radio_dataExchangeFee5 = $(this).data("value");
	
	if(	$(this).hasClass("unselected") == true )
	{
		var val1 = $(this).parent("div").prev("div").data("value");
		software_dataFeeds_monthlyTotal = software_dataFeeds_monthlyTotal - val1;
		$(".cls_radio_dataMarketDepthFee5").addClass("unselected");
		$(this).removeClass("unselected").addClass("selected");
		$("#id_SADF_monthlyTotal").text("$" + software_dataFeeds_monthlyTotal);
	}
});


$(document).on('keydown input', ".cls_textOneLetterOnly", function (e) 
{
if (	!($(this).val().trim() == 'c'	||	$(this).val().trim() == 'C'	||	$(this).val().trim() == 's'	||	$(this).val().trim() == 'S'	||	$(this).val().trim() == 'p'	||	$(this).val().trim() == 'P') 	)
	{
		return false;
	}
});

$(document).on('change input keydown', 'input.cls_w9_SSN', function(e)
{
	if(	e.which == 8){
		if(	$(this).val().length ==	0 )
			$(this).prev("input.cls_w9_SSN").focus();
	}else{
		if(	$(this).val().length ==	1 )
			$(this).next("input.cls_w9_SSN").focus();
	}
});

$(document).on('change input keydown', 'input.cls_w9_EIN', function(e)
{
	if(	e.which == 8){
		if(	$(this).val().length ==	0 )
			$(this).prev("input.cls_w9_EIN").focus();
	}else{
		if(	$(this).val().length ==	1 )
			$(this).next("input.cls_w9_EIN").focus();
	}
});



