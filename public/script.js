function entrar(){
  const nome = document.getElementById('nome').value;
  const socket = io.connect({query: "name="+nome});

  var clients = {};

  socket.on('broadcast',function(data) {
    console.log(data.nome);

    let text = " "+data.nome;
    let li = document.createElement("li");
    let node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("online").appendChild(li);
  });
}

function revealAll(bool) {
  if (bool) {
    const selTd = document.getElementsByTagName('td');
    for (let i = 0; i < selTd.length; i++) {
      selTd[i].classList.add("revealed");
      selTd[i].classList.remove("hidden");
    }
  }else{
    const selTd = document.getElementsByTagName('td');
    for (let i = 0; i < selTd.length; i++) {
      selTd[i].classList.add("hidden");
      selTd[i].classList.remove("revealed");
    }
  }
}

function reveal(id) {
  const selTd = document.getElementsByTagName('td');
  for (let i = 0; i < selTd.length; i++) {
    if (id == selTd[i].id) {
      selTd[i].classList.add("revealed");
      selTd[i].classList.remove("hidden");
    }
  }
}

window.onload = function() {
  const selCapt = document.getElementById("capt");
  selCapt.addEventListener('change', (event) => {
    if(selCapt.checked){
      console.log('Changed to Captain');
      revealAll(true);
      //element.classList.add("mystyle");
    }
    else{
      console.log('Changed to Spy');
      revealAll(false);
    }
  });

  const selTeam = document.getElementsByName("team");
  for (let i = 0; i < selTeam.length; i++) {
    selTeam[i].addEventListener('change', (event) => {
      console.log('Changed to '+selTeam[i].value.charAt(0).toUpperCase() + selTeam[i].value.slice(1)+' Team');
    });
  }

  const selTd = document.getElementsByTagName('td');
  for (let i = 0; i < selTd.length; i++) {
    selTd[i].addEventListener('click', (event) => {
      console.log('Clicked '+selTd[i].id);
      reveal(selTd[i].id);
    });
  }
};
