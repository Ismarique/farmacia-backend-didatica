export interface produto{
    idProduto?: number;
    descricao: string;
    validade?: Date | null;
    preco: number;
    qtdEstoque: number;
    qtdMinEstoque: number;
}