import { isAxiosError } from "axios";
import { http } from "../lib/axios";

type Data = {
  tabelaPrecoFrequenciaId: number;
  clienteId: number;
  quantidade: number;
  dtInicio: string;
  dtFim: string;
  usuarioId: number;
};

class ContratosApi {
  static async criarRascunho(data: Data) {
    try {
      const response = await http.post(`/contratos/criarRascunho`, {
        tabelaPrecoFrequenciaId: data.tabelaPrecoFrequenciaId,
        clienteId: data.clienteId,
        quantidade: data.quantidade,
        dtInicio: data.dtInicio,
        dtFim: data.dtFim,
        usuarioId: data.usuarioId,
      });
      return response.data;
    } catch (err) {
      return err
    }
  }
}

export { ContratosApi };
