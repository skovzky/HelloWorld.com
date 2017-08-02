function show_hide() {
  var x = document.getElementById('exp-content');
  var b = document.getElementById('button');

  if(x.style.display ==='none'){
    x.style.display = 'block';
    b.value = "Close Text";
  }
  else
    x.style.display = 'none';   
    b.value = "Open Text";
}

