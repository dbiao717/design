
/*  server temp */

var title = ['支持贷' , '接力贷'];
var content = ['部分客户因不完全符合银行贷款条件而被银行暂时放弃授信的，<br />公司可以根据情况提供部分授信支持，具体情况需要根据客户实际而定。' , '部分产品有市场、行业有前景而抵押有瑕疵的客户，<br />公司可以为客户提供部分责任担保，客户的银行贷款到期后，<br />公司可以继续提供资金支持。'];
var light = ['公司可以根据客户的具体需求量身定做金融服务方案。' , '公司可以根据客户的具体需求量身定做金融服务方案。'];



$(function(){
			
	var url = window.location.href;
	//alert(url);
	var id =5;
	
	$("#center .content h2").html(title[id-1]);
	$("#center .content p").html(content[id-1]);
	$("#center .content h3").html(light[id-1]);
	
	var href = $("#center .content span a").attr("href");
	$("#center .content span a").attr("href" , href + "?id="+id);
			
				
});