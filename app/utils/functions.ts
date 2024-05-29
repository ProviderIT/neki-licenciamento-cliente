export function formatarData(data: string): string {
  const partes = data.split('/')
  return partes[2] + '-' + partes[1] + '-' + partes[0]
}

export function formatarDataEntoPt(data: string): string {
  const partes = data.split('-')
  return partes[2] + '/' + partes[1] + '/' + partes[0]
}
