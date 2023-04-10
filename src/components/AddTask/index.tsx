import { Button } from "../Button";
import "./style.css"

export const AddTask: React.FC = () => {
    return (
        <div className="addTask-container">
            <div className="form-group">
                <label htmlFor="titulo">Título</label>
                <input type="text" id="tilulo" />
            </div>
            <div className="form-group">
                <label htmlFor="data">Data</label>
                <input type="data" id="data" />
            </div>
            <div className="form-group">
                <Button className="sucess">Salvar</Button>
            </div>

        </div>
    );
};