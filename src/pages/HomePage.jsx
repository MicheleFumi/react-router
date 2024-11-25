import { useState, useEffect } from 'react'
import PostCard from '../Components/PostCard/PostCard'
import InputForm from '../Components/InputForm/InputForm'
const url = 'http://localhost:3000'
const endpoint = '/post/'

const initialFormData =
{
    title: '',
    content: '',
    image: '',
    tags: [],

}


export default function () {

    const [formData, setFormData] = useState(initialFormData)
    const [blogDataApi, setBlogDataApi] = useState({})

    function fetchData() {
        fetch(`${url}${endpoint}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);

                setBlogDataApi(data)
            }
            )
    }
    useEffect(fetchData, [])


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

    function handleRemoveTitle(e) {
        e.preventDefault()

        const titleToRemove = e.target.getAttribute('data-id')
        console.log(titleToRemove);


        fetch(`${url}${endpoint}${titleToRemove}`, {
            method: 'DELETE',
            headers: {
                'content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
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
            <main className="py-4">
                <div className="container">
                    <InputForm handleFormSubmit={handleFormSubmit} handleFormField={handleFormField} handleChecks={handleChecks} />
                    {/* Lista dei post */}

                    <h2 className="my-4">Altre Ricette</h2>

                    <PostCard blogDataApi={blogDataApi} handleRemoveTitle={handleRemoveTitle} />
                </div>

            </main>
        </>




    )
}





