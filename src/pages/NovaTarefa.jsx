import Rodape from "../components/Rodape.jsx";
import {Button} from "react-bootstrap";
import {useForm} from "react-hook-form";

export default function NovaTarefa() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function salvarTarefa(data) {
        console.log(data);
    }

    return (
        <>
            <main>
                <form className={"form-section"} onSubmit={handleSubmit(salvarTarefa)}>
                    <h1>Adicionar tarefas!</h1>
                    <hr/>
                    <div>
                        <label htmlFor={"titulo"}>Titulo</label>
                        <input type={"text"} id={"titulo"} className={"form-control"}
                               {...register("titulo", {required: true, maxLength: 200})}
                        />
                        {errors.titulo && <small className={"invalid"}>O título é inválido.</small>}

                    </div>

                    <div>

                        <label htmlFor={"descricao"}>Descrição</label>
                        <textarea className={"form-control"} id={"descricao"}
                                  {...register("descricao", {required: true, maxLength: 500})}
                        ></textarea>
                        {errors.descricao && <small className={"invalid"}>A descrição é inválida.</small>}
                    </div>

                    <div>

                        <label htmlFor={"dataConclusao"}>Data de conclusão</label>
                        <input type={"date"} id={"dataConclusao"} className={"form-control"}
                               {...register("dataConclusao")}
                        />

                    </div>

                    <div className={"form-check"}>

                        <input type={"checkbox"} id={"concluido"} className={"form-check-input"}
                               {...register("concluido")}
                        />
                        <label htmlFor={"concluido"} className={"form-check-label"}>Concluído?</label>

                    </div>

                    <div>
                        <label htmlFor={"categoria"}>Categoria</label>
                        <select id={"categoria"} className={"form-select"} {...register("categoria")}>
                            <option value={"Trabalho"}>Trabalho</option>
                            <option value={"Estudo"}>Estudo</option>
                            <option value={"Projetos"}>Projetos</option>
                            <option value={"Lazer"}>Lazer</option>
                            <option value={"Outro"}>Outro</option>
                        </select>
                    </div>

                    <Button variant={"dark"} className={"w-100 mt-1"} type={"submit"}>Salvar Tarefa</Button>

                </form>


            </main>
            <Rodape/>
        </>
    )
}

