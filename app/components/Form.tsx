'use client'
import {FormEvent, useState} from 'react'
import Avatar from "react-avatar"
import { validateEmail, validateTelefone } from '../utils/ValidateEmail';

export default function Form () {
    const [nome, setNome] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message,setMessage] = useState<string>("")
    const [error, setError] = useState<null | string>(null)

    const consultants = [
        {id: 0, image: '/form/Avatar1.png'},
        {id: 1, image: '/form/Avatar2.png'},
        {id: 2, image: '/form/Avatar3.png'}
    ]

    const handleForm = (e:FormEvent) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setError("por favor preenche corretamente")
        }

        if (!validateTelefone(telefone)) {
            setError("por favor preenche corretamente")
        }

        alert(`seu nome é ${nome},teelefone: ${telefone} email: ${email} messagem: ${message}`)

        setNome("");
        setEmail("");
        setTelefone("");
        setMessage("")

    }
    
 
    return (
        <>
       <section className=" w-[1440px] h-[638px] bg-[linear-gradient(to_right,black_0px,black_835px,transparent_835px,transparent_1440px),url('/form/form.png')] bg-cover bg-right">
            <div className="flex flex-col items-start justify-start lg:w-[413px] lg:h-[232px]">
                <div className=" text-white text-4xl text-justify mt-16 ml-12" >
                    <p>Fale agora</p>
                    <p>com um consultor</p>
                    <p>de vendas</p>
                </div>
                <div className="text-white text-[18px] texte-start justify-start font-medium mt-4 ml-12">
                <p>Tire suas dúvidas e conheça de perto o seu</p><br />
                <p className="font-bold text-start">novo jeito de morar</p>
                </div>

            </div>
            <div className="text-white text-[12px] text-start  mt-16 ml-12">
                <p>Consultores online</p>
                {
                    consultants.map((e) => {
                        return (
                            <Avatar key={e.id} src={e.image}  size="54" round />
                        )
                    })
                }

            </div>
       </section>
         <form onSubmit={handleForm} className="absolute left-[735px] top-[1604px] rounded-xs mt-16">
            <div className="flex flex-col items-center justify-center gap-4 bg-[var(--primary)] w-[310px] h-[490px] lg:w-[470px] lg:h-[524px] ">
            <p className="font-medium ">Fale agora mesmo com a Liva</p>
            <input
            value={nome}
            onChange={({target}) => setNome(target.value)}
             className="lg:w-[369px] lg:h-[48px] border-2 border-[#000000] rounded-xs" placeholder="Nome" ></input>
            <input
            value={telefone}
            onChange={({target}) => setTelefone(target.value)} 
            className="lg:w-[369px] lg:h-[48px] border-2 border-[#000000] rounded-xs" placeholder="Telefone"></input>
            <input
            value={email}
            onChange={({target}) => setEmail(target.value)}
            className="lg:w-[369px] lg:h-[48px] border-2 border-[#000000] rounded-xs" placeholder="E-mail"></input>
            <textarea
            value={message}
            onChange={({target}) => setMessage(target.value)}
            className="lg:w-[369px] lg:h-[130px] border-2 border-[#000000] rounded-xs" placeholder="Mensagem"></textarea>

            <button className="bg-[var(--bt-primary-color)] text-white justify-center lg:w-[369px] lg:h-[47px] border-none rounded-xs">ENVIAR MENSAGEM</button>

            </div>

        </form>

      
      
        
        </>

    )

}