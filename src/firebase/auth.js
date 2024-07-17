//objetivo desse arquivo é ter tudo relacionado a autenticação
// Criar usuario com email/senha/nome
//entrar com google
// entrar com email/senha
//logout
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "./config";
export async function criarUsuario(nome, email, senha) {
  //indicamos o serviçoi de autenticação e o email e senha do novo usuário
  //user é um objeto com informações do usuário autenticado.
  const { user } = await createUserWithEmailAndPassword(auth, email, senha);

  //define o nome de exibição como o nome vindo do formulário de cadastro
  await updateProfile(user, {displayName: nome});
}

export async function entrarGoogle () {
    //indicar qual o provedor de login será usado
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
}

export async function loginUsuario (email, senha){
   await signInWithEmailAndPassword(auth, email, senha)
}

export async function logout(){
  //Desconectar o usuário atualmente logado na aplicação
  await signOut(auth)
}
