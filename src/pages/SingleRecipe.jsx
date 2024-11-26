import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function SingleRecipe() {
    const [post, setPost] = useState(null)
    const { id } = useParams()
    const url = `http://localhost:3000/post/${id}`
    console.log({ id });

    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const keys = Object.keys(data)
                    if (keys.includes('error')) {
                        // redirct to a 404
                        navigate('/404')

                    } else {
                        // check if there are no errors 
                        // then set the pizza
                        setPost(data.data)
                        console.log(setPost);

                    }


                })
                .catch(err => {
                    console.log(err);

                })
        },

        [])
    return (
        <>
            {/*  <div className="container">
                <section className="pizza_details">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card border-0 rounded-4 shadow-lg">
                                    <img className="card-img-top rounded-4" src={`http://localhost:3001/${post.image}`} alt="" />
                                </div>
                            </div>
                            <div className="col">
                                <h3>{post.title}</h3>
                                <div>
                                    <p>
                                        {post.content}
                                    </p>
                                    <div className="price">€{post.tags}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
 */}

        </>




    )
} 