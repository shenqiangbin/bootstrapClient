//提示消息
function showMsg(msg,success){

	var builder = new Array();

	builder.push("<div id=\'successMsg\' class=\'alert {1} alert-dismissible col-md-3 \'>");
	builder.push("	<button type=\'button\' class=\'close\' data-dismiss=\'alert\' aria-label=\'close\'>");
	builder.push("		<span aria-hidden=\'true\'>&times;</span>");
	builder.push("	</button>");
	builder.push("  <span class=\'glyphicon glyphicon-{2}\' aria-hidden=\'true\'></span>");
	builder.push("	<span>{0}</span>");

	var msghtml = builder.join('');
	msghtml = msghtml.replace('{0}',msg);

	if(success){
		msghtml = msghtml.replace('{1}','alert-success').replace('{2}','ok-sign');
	}
	else{
		msghtml = msghtml.replace('{1}','alert-warning').replace('{2}','remove-sign');
	}

	$("#msgContainer").children().remove();
	$("#msgContainer").append(msghtml);
}