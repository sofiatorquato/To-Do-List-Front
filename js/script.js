const modal = document.getElementById("Modal-Criar");
const abrir = document.getElementById("tarefabutton");
const fechar = document.getElementById("fechar");

 /*Para abrir o modal*/ 
abrir.addEventListener("click", () => {
  modal.showModal();
});
/*Para fechar o modal*/
fechar.addEventListener("click", () => {
  modal.close();
});
