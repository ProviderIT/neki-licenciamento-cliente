interface Client {
  email?: string;
  cpfCnpj?: string;
  razaoSocial?: string;
  nomeFantasia?: string;
  endLogradouroCep?: string;
  endLogradouroNf?: string;
  endLogradouroNumeroNf?: string;
  endLogradouroComplementoNf?: string;
  dtUltimoAcesso?: string;
  diaMelhorVencimentoBoleto?: string;
  codigoExterno?: string;
  codigoGatewayPagamento?: string;
  municipioId?: number;
  ufId?: number;
  usuarioId?: number;
  tipoPessoa?: "F" | "J";
  telefone?: string;
  empresaProprietariaSistemaId?: number;
  dtCadastro: Date | string;
  dtUltAlt: Date | string;
  id: number;
}

export type { Client };
