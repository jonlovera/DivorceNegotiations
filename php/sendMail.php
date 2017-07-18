<?php
if(!$_POST || $_POST["firstName"] == "" || $_POST["lastName"] == "" || $_POST["phoneNumber"] == "" || $_POST["email"] == ""){
    header("HTTP/1.0 400 Bad Request");
    die("All thel fields are required.");
}

$name = strip_tags($_POST["firstName"]);
$surname = strip_tags($_POST["lastName"]);
$phoneNumber = strip_tags($_POST["phoneNumber"]);
$email = strip_tags($_POST["email"]);

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

    // put your email address here
    $youremail = 'contact@divorcenegotiations.com.au';

    // prepare a "pretty" version of the message
    $body = "
<html>
<body style='margin:20px;'>
    <img src='http://divorcenegotiations.com.au/build/img/logo-mail.png' alt='Divorce Negotiations' title='Divorce Negotiations' style='display:block' width='184.64px' height='42px' />
    <hr style='
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 20px 0;
    padding: 0; ' />
    <div style='color:#434350;margin: 0 15px;'>
        <span style='font-size:18px;'>
            Hi David,
            <br/>
            <br/>
            <b>$name</b> would like to received a call from your team. See the details below:
        </span>
        <br/>
        <br/>

        <table style='font-size:16px;margin-top:20px;'>
            <tr>
                <td>Name</td>
                <td>$name</td>
            </tr>
            <tr>
                <td>Surname</td>
                <td>$surname</td>
            </tr>
            <tr>
                <td>Contact N.:</td>
                <td>$phoneNumber</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>$email</td>
            </tr>
        </table>
    </div>
</body>
</html>";

    // Use the submitters email if they supplied one
    // (and it isn't trying to hack your form).
    // Otherwise send from your email address.
    $headers = "From: no-reply@divorcenegotiations.com.au";
    $headers .= "Reply-To: ". $email . "\r\n";

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    // finally, send the message
    mail($youremail, 'DivorceNegotiations.com.au - '.$name.' would like to received a call from your team.', $body, $headers );
    header("HTTP/1.0 200 Success");
    die("OK.");

} // otherwise, let the spammer think that they got their message through

header("HTTP/1.0 500 Server Error");
die("Internal server error.");
?>
