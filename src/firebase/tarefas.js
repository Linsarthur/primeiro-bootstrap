//o Proposito desde arquivo é ter todas as funções necessárias para gerenciar tarefas:
//(CRUD - Create, Read, Update, Delete)
// - Adicionar uma nova tarefa (Create)
// - Listar as tarefas do banco (Read)
// - Atualizar uma tarefa(Update)
// - Deletar uma tarefa (Delete)

import {collection, addDoc, getDocs, doc, deleteDoc, getDoc, updateDoc} from "firebase/firestore"
import {db} from "./config.js";

// Criar uma referencia para a coleção no firestore
export const tarefasCol = collection(db, "tarefas");

// Funçõa assincrona = O resultado não é obtido de imediato
// Haverá uma "espera"

export async function addTarefa(data) {
    //Essa função se comunica com o firestore, envia os dados (data) e salva a coleção indicada
    await addDoc(tarefasCol, data);
    //await é uma instrução para esperar o resultado de addDoc
}

export async function getTarefas() {
    //snapshot é o resultado da busca na coleção de tarefas
    const snapshot = await getDocs(tarefasCol);
    const tarefas = [];

    //Percorremos cada documento da coleção e inserimos no array de tarefas

    snapshot.forEach(doc =>{
         tarefas.push({...doc.data(), id: doc.id});
    })
     return tarefas;
}

export async function deleteTarefa(id){
    const tarefaDoc =  doc(tarefasCol, id);
    await deleteDoc(tarefaDoc);
}

export async function getTarefa(id) {
    // Cria uma referência para um documento específico da coleção
    const tarefaDoc = doc(tarefasCol, id);
    // Trazer as informações do documento
    const snapshot = await getDoc(tarefaDoc);

    // Retorna os dados dentro do documento
    // {titulo: '', descricao: '', ...}
    return snapshot.data();
}

export async function updateTarefa(id, data) {
    const tarefaDoc =  doc(tarefasCol, id);
    await updateDoc(tarefaDoc, data);
}