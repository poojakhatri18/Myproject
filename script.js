var message ="in global";
var x;
console.log("global: message =" + message);
var a= function ()
{
	var message="inside a";
	console.log("a: message" +message);
	b();
}
function b()
{
	console.log("b:message =" + message)
}
a();