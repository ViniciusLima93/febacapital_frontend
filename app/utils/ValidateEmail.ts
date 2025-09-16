

export const validateEmail = (email:string) => {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email)
}

export const validateTelefone = (telefone:string) => {
    const regex  = /^(\(?\d{2}\)?\s?)?(\d{4,5})-?(\d{4})$/;

    return regex.test(telefone)

}