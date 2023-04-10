import { TaskProps } from "../../App";
import { Button } from "../Button";
import "./style.css";
import {FaTrashAlt, FaCheck} from "react-icons/fa"

interface ItemListProps extends TaskProps{}

export const ItemList: React.FC<ItemListProps> = ({titulo, data, status}) => {
    return (
        <div className="list-item">
            <span className="titulo">{titulo}</span>
            <time className="data">{data.toLocaleDateString("pt-br", {dateStyle: "long"})} </time>
            <span className="status">{status ? "Concluído" : " A fazer"} </span>
            <div className="acoes">
                {!status &&(
                    <Button className="sucess" title="Concluir Tarefa">
                    <FaCheck/>
                </Button>
                )}
                <Button className="danger" title="Excluir Tarefa">
                    <FaTrashAlt/>
                </Button>

            </div>
        </div>
    );
};