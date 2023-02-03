import { useEffect } from "react"

export default function Contact(){
    useEffect(function(){
        document.title = 'Contact'
    })
    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-description">Kamu dapat menghubungiku di bawah ini</p>
            <ul>
                <li>WA 08213904445</li>
                <li>Email andirasakti@gmail.com</li>
            </ul>
        </section>
    )
}