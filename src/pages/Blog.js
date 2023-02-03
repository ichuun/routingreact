import { useEffect } from "react"

export default function Blog(){
    useEffect(function(){
        document.title = 'Blog'
    })
    return (
        <section className="section">
           <h1 className="section-title">Blog Pages</h1>
           <p className="section-description">Ini adalah blog yang belum diisi, hehehhe</p> 
        </section>
    )
}