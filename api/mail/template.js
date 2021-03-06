const template = ({ firstName, lastName, phoneNumber, email, ip, datetime }) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html>
<body style='margin:20px;'>
    <img src='https://divorcenegotiations.com.au/img/logo-mail.png' alt='Divorce Negotiations' title='Divorce Negotiations' style='display:block' width='184.64px' height='42px' />
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
            <b>${firstName}</b> would like to received a call from your team. See the details below:
        </span>
        <br/>
        <br/>

        <table style='font-size:16px;margin-top:20px;'>
            <tr>
                <td><b style='padding-right: 15px'>Name</b></td>
                <td>${firstName}</td>
            </tr>
            <tr>
                <td><b style='padding-right: 15px'>Surname</b></td>
                <td>${lastName}</td>
            </tr>
            <tr>
                <td><b style='padding-right: 15px'>Contact N.</b></td>
                <td>${phoneNumber}</td>
            </tr>
            <tr>
                <td><b style='padding-right: 15px'>Email</b></td>
                <td>${email}</td>
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
    <br />
    <hr style='
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 20px 0;
    padding: 0; ' />
    <div>
      <p style="margin-top: 0; margin: 10px 0; font-size: 0.8em; color: #b0b0b5; font-weight: bold;">IP: ${ip}</p>
      <p style="margin-top: 0; margin: 10px 0; font-size: 0.8em; color: #b0b0b5; font-weight: bold;">Time: ${datetime}</p>
      <p style="margin-top: 0; margin: 10px 0; font-size: 0.8em; color: #b0b0b5; font-weight: bold;">This email was sent from a contact form on Divorce Negotiations (https://divorcenegotiations.com.au)</p>
    </div>
</body>
</html>
`;

module.exports = template;
