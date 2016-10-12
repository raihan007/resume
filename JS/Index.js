function getDate()
{
	var day = "<option value='Day'>Day</option>";
	for (i = 1; i <= 31; i++) 
	{ 
    	day += "<option value='"+i+"'>"+i+"</option>";
	}
	document.getElementById("day").innerHTML = day;

	var monthString = "<option value='0'>Month</option>";
	var month  = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var len = month.length;

	for (i = 0; i < len; i++) 
	{
		var a = i + 1;
		monthString += "<option value='"+a+"'>"+month[i]+"</option>";
	}
	document.getElementById("month").innerHTML = monthString ;

	var year = "<option value='Year'>Year</option>";
	var d = new Date();
	var n = d.getFullYear();
    for(i=n; i >= n-40; i--)
    {
        year += "<option value='"+i+"'>"+i+"</option>";
    }

    document.getElementById("year").innerHTML = year ;
}

function clearField()
{
	$("#passEmail").val('');
	$("#firstName").val('');
	$("#lastName").val('');
	$("#email").val('');
	$("#confirmEmail").val('');
	$("#password").val('');
}

function login()
{
  var username = $("#username").val();
  var password = $("#password").val();

  if(username.length == 0)
  {
    alert("Please Username First");
  }
  else if(password.length == 0)
  {
    alert("Please Passwword First");
  }
  else
  {
	$.ajax({
			method: "POST",
			url: "login.php",
			data: { name: username, pass: password}
		}).done(function (msg)
		{
			if(msg == "")
			{
				alert("Wrong Username or password!");
			}
			else
			{
				window.location.assign("Home.php");
			}
     });
  }
}