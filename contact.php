<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CLS</title>
  <link rel="stylesheet" href="CSS/style.css" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="CSS/contact.css" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="CSS/responsive.css" media="screen" title="no title" charset="utf-8">
  <link href='https://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,600,700' rel='stylesheet' type='text/css'>
  <link rel="icon" type="image/ico" href="images/favicon.ico" />

</head>
<body>
  <section id="section_menu">
    <div id="menu">
      <div id="logo_menu"><img src="images/LogoCLS.jpg" alt="" /></div>
      <ul>
        <li><a href="index.html">Accueil</a></li>
        <li><a href="atelier.html">Atelier</a></li>
        <li><a href="projets.html">Projets</a></li>
        <li><a href="contact.php">Contact</a></li>
      </ul>
    </div>

    <section id="form">
      <?php if(array_key_exists('errors', $_SESSION)) : ?>
        <div id="error">
          <?php echo implode('<br>', $_SESSION['errors']); ?>
        </div>
      <?php endif; ?>
      <?php if(array_key_exists('success', $_SESSION)): ?>
        <div id="success">
          Votre message a bien été envoyé.
        </div>
      <?php endif; ?>
      <!-- <h1 id="contactez_nous">Contactez-nous</h1> -->
      <div id="container_map">

        <div id="telephone">
          <!-- <div id="left_form"> -->
          <!-- </div> -->
          <p id="titre_contact">Atelier d'Architecture -</p>
          <p id="titre_contact">Carole La Salmonie</p>
          <p>4 B Impasse Gallieni</p>
          <p>33260 La Teste de Buch</p>
          <p>06.99.65.88.45</p>
          <p>09.83.46.66.85</p>
          <p>cls.architecte@gmail.com</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.302305513968!2d-1.1525572850110344!3d44.631737996622476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd549ebc64a009bf%3A0x5a64430cbc537b02!2s4+Impasse+du+G%C3%A9n%C3%A9ral+Gallieni%2C+33260+La+Teste-de-Buch!5e0!3m2!1sfr!2sfr!4v1464012829547" width="700" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <p id="horaires">L’atelier est ouvert du lundi au vendredi de <span>8h30</span> à <span>19h</span>.</p>
      <p class="sous_horaire">N’hésitez pas à venir dès que vous le souhaitez pour poser vos questions ou convenir d'un rendez-vous.</p>
      <p class="sous_horaire">Vous pouvez également contacter l’atelier par téléphone ou mail du lundi au dimanche. Une réponse vous sera retournée rapidement.</p>

      <section id="container_contact">

        <form action="post_contact.php" method="POST">
          <label for="input_name">Votre Nom : </label>
          <input required type="text" name="name" id ="input_name" value="<?php echo isset($_SESSION['inputs']['name']) ? $_SESSION['inputs']['name'] : ''; ?>">
          <label for="input_email">Votre Email : </label>
          <input required type="email" name="email" id ="input_email" value="<?php echo isset($_SESSION['inputs']['email']) ? $_SESSION['inputs']['email'] : ''; ?>">
          <label for="input_message">Votre message : </label>
          <textarea required type="text" name="message" id ="input_message" rows="8"><?php echo isset($_SESSION['inputs']['message']) ? $_SESSION['inputs']['message'] : ''; ?></textarea>
          <button type="submit">Envoyer</button>
        </form>
        <img src="images/facade_agence.JPG"/>
      </section>

      <footer><a href="mentions.html">Mentions légales</a></footer>
    </section>
  </section>
</body>
</html>

<?php
unset($_SESSION['inputs']);
unset($_SESSION['success']);
unset($_SESSION['errors']);
?>
