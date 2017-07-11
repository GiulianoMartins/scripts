<?php
require 'PHPMailer/PHPMailerAutoload.php';
try {

    $mail = new PHPMailer();
    //$mail->SMTPDebug = 3;                               // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Host = 'smtp.rodrigo15.com.br';                       // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'send.mail@rodrigo15.com.br';            // SMTP username
    $mail->Password = 'rp@sendmail';                      // SMTP password
    $mail->Port = 587;                                    // TCP port to connect to
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Charset = 'UTF-8';                             //codificação UTF-8

    $mail->From = 'rodrigo@campanha15.com.br';
    $mail->FromName = 'Contato Site - Rodrigo Pacheco';
    //$mail->addAddress('geral@rodrigo15.com.br');// Name is optional

    $destino = strip_tags($_POST['destinatario']);


    switch ($destino) {
        case 'Geral':
            $mail->addAddress('geral@rodrigo15.com.br');
            //$mail->addAddress('giuliano@campanha15.com.br');
            break;
        case 'Imprensa':
            $mail->addAddress('imprensa@rodrigo15.com.br');
            //$mail->addAddress('giuliano@campanha15.com.br');
            break;
        case 'Material de Campanha':
            $mail->addAddress('campanha@rodrigo15.com.br');
            //$mail->addAddress('giuliano@campanha15.com.br');
            break;
        case 'Curriculo':
            $mail->addAddress('curriculo@rodrigo15.com.br');
            //$mail->addAddress('giuliano@campanha15.com.br');
            break;
    }

    //$mail->addAddress('giuliano@campanha15.com.br');

    $message = file_get_contents('mail-templates/contato.html'); 
    $message = str_replace('%nome%', $_POST['nome'], $message); 
    $message = str_replace('%email%', $_POST['email'], $message);
    $message = str_replace('%destinatario%', $_POST['destinatario'], $message);
    $message = str_replace('%mensagem%', $_POST['msg'], $message);

    $mail->Subject = 'Contato Site - Rodrigo Pacheco';
    $mail->MsgHTML($message);

    $mail->Send();

    echo '<p>Mensagem enviada com sucesso !</p>'; //retorno devolvido para o ajax caso sucesso

} catch (phpmailerException $e) {

    echo $e->errorMessage(); //retorno devolvido para o ajax caso erro
}
?>