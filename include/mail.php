<h2 align="left">PETICIONES, QUEJAS Y/O COMENTARIOS</h2>
  <br />
  <form id="form_email" method="post">
  NOMBRE:<br /><input type="text" id="name_form" name="name" /><br />
  CORREO:<br /><input type="email" id="email_form" name="email" /><br />
  TEMA:<br /><input type="text" id="subjet_form" name="subject" /><br />
  MENSAJE:<br />
  <textarea id="comment_form" name="comment" rows="15" cols="40"></textarea><br />
  <input type="submit" onclick="enviar()" value="Enviar" />
  </form>


<script language="javascript">
function enviar() {
	if (email==null) {
		var email = "document.getElementById('email_form').value;
		    
		} else {
		document.write('<meta http-equiv="refresh" content="3; url=http://tuinfopro.com/" />');
		
		}
		
	}
</script> 
  


