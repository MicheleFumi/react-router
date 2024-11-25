import { useState, useEffect } from 'react'

export default function PostCard({ handleRemoveTitle }) {

    const [blogDataApi, setBlogDataApi] = useState({})




    return (
        <div className="row">
            {blogDataApi.data ? (
                blogDataApi.data.map((post, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card shadow-sm h-100 card-fixed-height">
                            <img
                                src={`${url}${post.image}`}
                                className="card-img-top"
                                alt={post.title}

                            />
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={handleRemoveTitle}
                                data-id={index}
                            >
                                Rimuovi
                            </button>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text card-description">{post.content}</p>
                                <div className="card-bottom">
                                    <div className="mt-auto">
                                        <strong>Categorie:</strong> {post.tags.join(", ")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            ) : (
                <p>Nessuna ricetta trovata.</p>
            )}
        </div>

    )

}