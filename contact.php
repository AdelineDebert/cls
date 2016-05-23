<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet" href="CSS/style.css" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="CSS/contact.css" media="screen" title="no title" charset="utf-8">
  <link href='https://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,600,700' rel='stylesheet' type='text/css'>
</head>
<body>
  <section id="section_menu">
    <div id="menu">
      <div id="logo_menu"><img src="Images/LogoCLS.jpg" alt="" /></div>
      <ul>
        <li><a href="index.html">Accueil</a></li>
        <li><a href="atelier.html">Atelier</a></li>
        <li><a href="projets.html">Projets</a></li>
        <li><a href="contact.php">Contact</a></li>
      </ul>
    </div>
    <section id="container_map">
      <h1 id="titre_contact">Atelier d'Architecture - Carole La Salmonie</h1>
      <h2 id="adresse">4B Impasse Gallieni - 33260 LA TESTE DE BUCH</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.302305513968!2d-1.1525572850110344!3d44.631737996622476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd549ebc64a009bf%3A0x5a64430cbc537b02!2s4+Impasse+du+G%C3%A9n%C3%A9ral+Gallieni%2C+33260+La+Teste-de-Buch!5e0!3m2!1sfr!2sfr!4v1462974480263" width="1000" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
    </section>

    <section id="form">
      <h1 id="contactez_nous">Contactez-nous</h1>
      <div id="container_contact">

        <div id="telephone">
          <div id="left_form">
            <img src="Images/facade_agence.jpg"/>
            <p id="horaires">L’Atelier est ouvert du lundi au vendredi de <span>8h30</span> à <span>19h</span>. Le premier contact se fait sans rendez-vous, n'hésitez pas à passer nous voir.</p>
          </div>
          <p>Tel : 06.99.65.88.45</p>
          <p>Tel : 09.83.46.66.85</p>
          <p>cls.architecte@gmail.com</p>
        </div>
        <?php if(array_key_exists('errors', $_SESSION)) : ?>
          <div>
            <?php echo implode('<br>', $_SESSION['errors']); ?>
          </div>
        <?php endif; ?>
        <?php if(array_key_exists('success', $_SESSION)): ?>
          <div>
            Votre Email a bien été envoyé.
          </div>
        <?php endif; ?>

        <form action="post_contact.php" method="POST">
          <label for="input_name">Votre Nom : </label>
          <input required type="text" name="name" id ="input_name" value="<?php echo isset($_SESSION['inputs']['name']) ? $_SESSION['inputs']['name'] : ''; ?>">
          <label for="input_email">Votre Email : </label>
          <input required type="email" name="email" id ="input_email" value="<?php echo isset($_SESSION['inputs']['email']) ? $_SESSION['inputs']['email'] : ''; ?>">
          <label for="input_message">Votre message : </label>
          <textarea required type="text" name="message" id ="input_message" rows="8"><?php echo isset($_SESSION['inputs']['message']) ? $_SESSION['inputs']['message'] : ''; ?></textarea>
          <button type="submit">Envoyer</button>
        </form>

      </div>
    </section>


  </section>
</body>
</html>

<?php
unset($_SESSION['inputs']);
unset($_SESSION['success']);
unset($_SESSION['errors']);
?>
