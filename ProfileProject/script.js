function login() {
  const userId = document.getElementById("inputID").value;

  if (!userId) {
    alert("Usuário Inválido! Por favor, ingresse um ID de usuario válido.");
    return;
  }

  localStorage.setItem("currentUserId", userId);

  window.location.href = "perfil.html";
}

function loadProfile() {
  const userID = localStorage.getItem("currentUserId");

  if (userID) {
    const nome = localStorage.getItem(userID + "_nome");
    const idade = localStorage.getItem(userID + "_idade");
    const email = localStorage.getItem(userID + "_email");
    const tema = localStorage.getItem(userID + "_tema");
    const cor = localStorage.getItem(userID + "_cor_fonte");
    const foto = localStorage.getItem(userID + "_foto");

    if (nome) document.getElementById("nameInput").value = nome;
    if (idade) document.getElementById("ageInput").value = idade;
    if (email) document.getElementById("emailInput").value = email;
    if (tema) document.getElementById("themeSelect").value = tema;
    if (cor) document.getElementById("fontColorSelect").value = cor;
    if (foto) document.getElementById("photoInput").value = foto;
    console.log("Foto carregada:", foto);

    if (foto) {
      document.getElementById("userPhoto").src = "Pictures/"+foto+".png";
    } else {
      document.getElementById("userPhoto").src = "Pictures/default.png";
    }
    changetheme();
    return;
  }

  alert("Cadastre seu perfil!");
}

function changetheme() {
  const body = document.body;
  const container = document.getElementById("profileContainer");
  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const emailInput = document.getElementById("emailInput");
  const themeSelect = document.getElementById("themeSelect");
  const fontColorSelect = document.getElementById("fontColorSelect");
  const photoInput = document.getElementById("photoInput");
  const signupBtn = document.getElementById("signupBtn");

  body.className = "";
  container.className =
    "p-8 rounded-xl shadow-lg w-full max-w-sm flex flex-col gap-6";
  nameInput.className =
    "w-full  px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500";
  ageInput.className =
    "w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500";
  emailInput.className =
    "w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500";
  themeSelect.className =
    "w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500";
  fontColorSelect.className =
    "w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500";
  photoInput.className =
    "w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500";
  signupBtn.className =
    "w-full bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition-colors";

  if (themeSelect.value === "lightTheme") {
    body.classList.add("bg-slate-100");
    container.classList.add("bg-slate-300");
    nameInput.classList.add("bg-white","text-gray-900","placeholder-gray-500","border-gray-300");
    ageInput.classList.add(  "bg-white",  "text-gray-900",  "placeholder-gray-500",  "border-gray-300");
    emailInput.classList.add(  "bg-white",  "text-gray-900",  "placeholder-gray-500",  "border-gray-300");
    themeSelect.classList.add("bg-white", "text-gray-900", "border-gray-300");
    fontColorSelect.classList.add(  "bg-white",  "text-gray-900","border-gray-300");
    photoInput.classList.add("bg-white", "text-gray-900", "border-gray-300");
    signupBtn.classList.add(  "bg-white",  "text-gray-900",  "hover:bg-indigo-700");
  } else if (themeSelect.value === "nightTheme") {
    body.classList.add("bg-gray-900");
    container.classList.add("bg-gray-800");
    nameInput.classList.add("bg-gray-900");
    ageInput.classList.add("bg-gray-900");
    emailInput.classList.add("bg-gray-900");
    themeSelect.classList.add("bg-gray-900");
    fontColorSelect.classList.add("bg-gray-900");
    photoInput.classList.add("bg-gray-900");
    signupBtn.classList.add( "bg-gray-700", "text-white", "hover:bg-gray-600");
  }

  if (fontColorSelect.value === "darkFont") {
    body.classList.add("placeholder-gray-900");
    nameInput.classList.add("text-gray-900", "placeholder-gray-900");
    ageInput.classList.add("text-gray-900", "placeholder-gray-900");
    emailInput.classList.add("text-gray-900", "placeholder-gray-900");
    photoInput.classList.add("text-gray-900", "placeholder-gray-900");
    themeSelect.classList.add("text-gray-900", "placeholder-gray-900");
    fontColorSelect.classList.add("text-gray-900", "placeholder-gray-900");
  } else if (fontColorSelect.value === "lightFont") {
    body.classList.add("placeholder-gray-100");
    nameInput.classList.add("text-gray-500");
    ageInput.classList.add("text-gray-500");
    emailInput.classList.add("text-gray-500");
    photoInput.classList.add("text-gray-500");
    themeSelect.classList.add("text-gray-500");
    fontColorSelect.classList.add("text-gray-500" );
  }
}

function signUp() {

  const userId = localStorage.getItem("currentUserId");
  console.log("User ID:", userId);

  if (!userId) {
    alert("Erro: Nenhum usuário logado!");
    return;
  }

  const nome = document.getElementById("nameInput").value.trim();
  const idade = document.getElementById("ageInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const tema = document.getElementById("themeSelect").value;
  const corFonte = document.getElementById("fontColorSelect").value;
  const foto = document.getElementById("photoInput").value.trim();

  console.log("Nome:", nome);
  console.log("Idade:", idade);
  console.log("Email:", email);
  console.log("Tema:", tema);
  console.log("Cor da Fonte:", corFonte);
  console.log("Foto:", foto);

  if (!nome || !idade || !email) {
    alert("Preencha Nome, Idade e Email.");
    return;
  }

  if (idade <= 0) {
    alert("Idade inválida!");
    return;
  }

  localStorage.setItem(userId + "_nome", nome);
  localStorage.setItem(userId + "_idade", idade);
  localStorage.setItem(userId + "_email", email);
  localStorage.setItem(userId + "_tema", tema);
  localStorage.setItem(userId + "_cor_fonte", corFonte);
  localStorage.setItem(userId + "_foto", foto || "Pictures/img1.png");

  alert("Perfil cadastrado com sucesso!");
  loadProfile();
}


function logout() {
  localStorage.removeItem("currentUserId");
  window.location.href = "index.html";
}
