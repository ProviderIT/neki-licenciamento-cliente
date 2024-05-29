import { isAxiosError } from 'axios'
import { http } from '../lib/axios'
import { Client } from '../@types/client'

class ClienteApi {
  static async buscarClientes() {
    try {
      const response = await http.get('clientes')
      return response.data
    } catch (err) {
      throw isAxiosError(err) ? err : new Error('Erro na requisição')
    }
  }

  static async criarCliente(data: Client): Promise<Client> {
    try {
      const response = await http.post<Client>('clientes', data)
      return response.data
    } catch (err) {
      throw isAxiosError(err) ? err : new Error('Erro na requisição')
    }
  }
}
export { ClienteApi }
