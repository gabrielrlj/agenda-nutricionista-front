import { Nutricionista } from '../login/nutricionista';


export class Paciente{
    id: number;
    nome: string;
    cpf: string;
    idade: number;
    sexo: number;
    nutricionista : Nutricionista;
}