import { useState, useEffect } from 'react'
const url = 'http://localhost:3000'
const endpoint = '/post/'
import InputForm from '../Components/InputForm/InputForm'
const initialFormData =
{
    title: '',
    content: '',
    image: '',
    tags: [],

}
export default function () {
    const [formData, setFormData] = useState(initialFormData)

    function handleFormSubmit(e) {
        e.preventDefault()
        console.log(formData);

        const newRecipe = {
            id: Date.now(),
            ...formData
        }
        fetch(`${url}${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(newRecipe),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log('success!:', res);
                setBlogDataApi(res)
            })
    }


    function handleFormField(e) {
        const { name, value, } = e.target;
        console.log(name);
        setFormData({
            ...formData,
            [name]: value,
        });

    }

    function handleChecks(e) {
        const { value, checked } = e.target;
        if (checked) {

            setFormData({
                ...formData,
                tags: [...formData.tags, value]
            });
        } else {
            // Se il checkbox è deselezionato, rimuovi il tag dall'array
            setFormData({
                ...formData,
                tags: formData.tags.filter(tag => tag !== value)
            });
        }
    }

    return (
        <>
            <div className="container">
                <InputForm handleFormSubmit={handleFormSubmit} handleFormField={handleFormField} handleChecks={handleChecks} />
            </div>

        </>




    )
} 