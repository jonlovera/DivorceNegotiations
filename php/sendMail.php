<?php
if(!$_POST || $_POST["firstName"] == "" || $_POST["lastName"] == "" || $_POST["phoneNumber"] == "" || $_POST["email"] == ""){
    header("HTTP/1.0 400 Bad Request");
    die("All thel fields are required.");
}

$name = strip_tags($_POST["firstName"]);
$surname = strip_tags($_POST["lastName"]);
$phoneNumber = strip_tags($_POST["phoneNumber"]);
$email = strip_tags($_POST["email"]);

require_once('variables.php');

function sendMailByMailgun($to, $toname, $mailfromname, $mailfrom, $subject, $html, $text, $tag, $replyto){
    $array_data = array(
		'from'=> $mailfromname .'<'.$mailfrom.'>',
		'to'=>$toname.'<'.$to.'>',
		'subject'=>$subject,
		'html'=>$html,
		'text'=>$text,
		'o:tracking'=>'yes',
		'o:tracking-clicks'=>'yes',
		'o:tracking-opens'=>'yes',
		'o:tag'=>$tag,
		'h:Reply-To'=>$replyto
    );
    $session = curl_init(MAILGUN_URL.'/messages');
    curl_setopt($session, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
  	curl_setopt($session, CURLOPT_USERPWD, 'api:'.MAILGUN_KEY);
    curl_setopt($session, CURLOPT_POST, true);
    curl_setopt($session, CURLOPT_POSTFIELDS, $array_data);
    curl_setopt($session, CURLOPT_HEADER, false);
    curl_setopt($session, CURLOPT_ENCODING, 'UTF-8');
    curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($session, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($session);
    curl_close($session);
    $results = json_decode($response, true);
    return $results;
}

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){
    // prepare a "pretty" version of the message
    $body = "
    <html>
    <body style='margin:20px;'>
        <img src='https://divorcenegotiations.com.au/build/img/logo-mail.png' alt='Divorce Negotiations' title='Divorce Negotiations' style='display:block' width='184.64px' height='42px' />
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
                    <td><b style='padding-right: 15px'>Name</b></td>
                    <td>$name</td>
                </tr>
                <tr>
                    <td><b style='padding-right: 15px'>Surname</b></td>
                    <td>$surname</td>
                </tr>
                <tr>
                    <td><b style='padding-right: 15px'>Contact N.</b></td>
                    <td>$phoneNumber</td>
                </tr>
                <tr>
                    <td><b style='padding-right: 15px'>Email</b></td>
                    <td>$email</td>
                </tr>
            </table>
            <br/>
            <br/>
            <span style='font-size:18px;'>
                Please get in contact within 3 to 5 days.
                <br/>
                <br/>
                Thanks!
            </span>
        </div>
    </body>
    </html>";


    // put your email address here
    $to = 'dfitzsimmons@divorcenegotiations.com.au';
    $toname = 'David Fitzsimmons';

    $mailfromname = 'Divorce Negotiations';
    $mailfrom = 'no-reply@divorcenegotiations.com.au';

    $replyto = $email;
    $subject = $name .' would like to get in contact.';
    $html = $body;
    $text = $body;
    $tag = '';

    sendMailByMailgun($to, $toname, $mailfromname, $mailfrom, $subject, $html, $text, $tag, $replyto);

    header("HTTP/1.0 200 Success");
    die("OK.");
} // otherwise, let the spammer think that they got their message through

header("HTTP/1.0 500 Server Error");
die("Internal server error.");
?>
