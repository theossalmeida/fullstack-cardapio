import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import './modal.css'

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    if (label == 'Preço do produto:') {
        return (
            <>
            <label>{label}</label>
            <input type="number" value={value} onChange={e => updateValue(e.target.value)}></input>
            </>
        )
    } else {
        return (
            <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
            </>
        )
    }
}

export function CreateModal({closeModal}: ModalProps) {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <button onClick={closeModal} className="btn-close">X</button>
                <form className="input-container">
                    <Input label="Nome do produto:" value={title} updateValue={setTitle} />
                    <Input label="Preço do produto:" value={price} updateValue={setPrice} />
                    <Input label="URL da imagem:" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary">{isLoading ? 'Postando' : 'Postar'}</button>
            </div>
        </div>
    )
}