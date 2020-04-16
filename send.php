<?php

if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $to = $email; // Здесь нужно написать e-mail, куда будут приходить письма
//    $from = "no-reply(собака)epicblog.net"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply(собака)epicblog.net
    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
    {
        show_error("<br /> Е-mail адрес не существует");
    }

    /* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
    $mail_to_myemail = "Здравствуйте! 
Было отправлено сообщение с сайта! 
E-mail: $email

Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";

    $headers = "From: $from \r\n";

    /* Отправка сообщения, с помощью функции mail() */
    mail($to, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
    echo "Сообщение отправлено. Спасибо Вам , мы скоро свяжемся с Вами.";
    echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
	function changeurl(){eval(self.location="https://epicblog.net");}
	window.setTimeout("changeurl();",3000);
</script>