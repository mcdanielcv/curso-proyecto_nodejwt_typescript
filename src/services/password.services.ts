import bcrypt from 'bcrypt'



const SALTO_ROUNDS: number = 10

export const hassPasword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, SALTO_ROUNDS);
}

//leer y comparar con el hash de la base
export const comparePaswwords = async (password :string , hash: string):Promise<boolean>=>{
    return await bcrypt.compare(password,hash)
}
