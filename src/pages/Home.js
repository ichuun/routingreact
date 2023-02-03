import { useEffect } from "react"

export default function Home(){
    useEffect(function(){
        document.title = 'Home'
    })
    return (
        <section className="section">
            <h1 className="section-title">Selamat Datang di Websiteku</h1>
            <p className="section-description">Halo semua, disini kamu akan mendapat informasi semua tentang diriku</p>
        </section>
    )
}