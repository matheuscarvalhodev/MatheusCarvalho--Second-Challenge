import React, { FC } from 'react';

interface ListItem {
    nome: string;
    cor: string;
}

interface Props {
    label: string;
    valor: string;
    aoAlterado: (valor: string) => void;
    obrigatorio?: boolean;
}

const lista: ListItem[] = [
    {
        nome: 'Monday',
        cor: '#FF0024',
    },
    {
        nome: 'Tuesday',
        cor: '#FF8000',
    },
    {
        nome: 'Wednesday',
        cor: '#FFCE00',
    },
    {
        nome: 'Thursday',
        cor: '#FF4D66',
    },
    {
        nome: 'Friday',
        cor: '#FFA74D',
    },
    {
        nome: 'Saturday',
        cor: '#FFDD4D',
    },
    {
        nome: 'Sunday',
        cor: '#FF7F91',
    },
];

const ListaSuspensa: React.FC<Props> = ({ label, valor, aoAlterado, obrigatorio = false }) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={(evento) => aoAlterado(evento.target.value)}>
                <option />
                {lista.map((item) => (
                    <option key={item.nome} value={item.nome} style={{ backgroundColor: item.cor }}>
                        {item.nome}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ListaSuspensa