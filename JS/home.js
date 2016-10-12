function clearForm()
{
	$("#uploadForm").trigger('reset');
	$("#sendMessageForm").trigger('reset');
}

function checkTyp()
{
	var file = $("#myfile").val();
	var pos = file.search("jpg");
	if(pos == -1)
	{
		alert("Only JPG files are supported.");
		$("#myfile").val('');
	}
}


function startHome()
{
	getOnlineFrnd();
}

function getOnlineFrnd()
{
	var operation = 'onlineFrnd';
    $.ajax({
            method: "POST",
            url: "HomeModel.php",
            data: { operation: operation}
            }).done(function (msg)
            {
                if( msg == "")
                {
                    alert("Somethings Wrong! please try again!");
                    window.location.href = "Home.php";
                }
                else
                {
                    $("#online").html(msg);
                }
        });
}

function sendSms(username,fullname)
{
	$("#receiver").val(fullname);
	$("#btnSendSms").on("click", function(){ sendMessage(username); });
}

function sendMessage(username)
{
	alert(username);
}