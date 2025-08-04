/* Memory - Footer Event Listener */
const clicker = document.querySelector('#resume').addEventListener('click', handler);

/* Footer Click Function */
function handler() {

  /* Event Log */
  console.log("I have been clicked");

  /* Footer Object into Memory */
  const item = document.getElementById('resume');
  const body = document.querySelector('.resume');

  /* If Logic */
  if (item.classList.contains('footerClose')) {
    item.classList.remove('footerClose');
    item.classList.add('footerOpen');
    /* Body Open */
    body.classList.remove('bodyClose');
    body.classList.add('bodyOpen');
  }

  /* Else Logic */
  else {
    item.classList.remove('footerOpen');
    item.classList.add('footerClose');
    /* Body Close */
    body.classList.remove('bodyOpen');
    body.classList.add('bodyClose');
  }

}
