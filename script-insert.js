window.onload = (event) => {  
  const elem = document.getElementById('script-place');
  console.log(elem);
  elem.innerHTML = 'This is content coming from a third-party script. <em>Have a nice day!</em>';
  elem.style.background = 'yellow';
};
