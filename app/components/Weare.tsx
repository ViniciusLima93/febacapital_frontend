import Image from "next/image";


export default function Weare () {

    return (
        <div className="flex items-center w-[1440px] p-[150px]">
        <section className="flex items-center gap-[130px] justify-start w-[310px] h-[350px] lg:w-[1148px] lg:h-[472px]">
            <Image src="/image/quemSomos.png" width={472} height={472} alt="quem somos" />
                <div className="text-justify justify-start">
                <header className="text-5xl font-bold text-justify">
                    <p>Construimos confiança</p>
                    <p className="text-center">e <strong className="text-green-500">realizamos sonhos!</strong></p>
                </header>
                <p className="text-[18px] mt-6 text-justify">
                    Na Liva, cada projeto é planejado para facilitar a vida dos moradores, trazendo uma sensação máxima de bem-estar. Espaços que abrigam histórias de vida e que são desenvolvidos para que você viva momentos incríveis ao lado da sua família.
                </p>
                <div className="flex justify-start mt-6">
                 <button className=" w-[172px] h-[47px] rounded p-3 border-3 border-[#000000]">SAIBA MAIS</button>

                </div>
                </div>
        </section>
        </div>
       


    )

}


