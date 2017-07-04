export const pagesInfo = pathname => {

  let info

  switch (pathname) {

    case '/pagina1':
      info = {
        category: 'Empresa',
        title: 'Página 1',
        description: 'Descrição de Página 1',
      }
      break;

    case '/pagina2':
      info = {
        category: 'Empresa',
        title: 'Página 2',
        description: 'Descrição de Página 2',
      }
      break

    case '/pagina3':
      info = {
        category: 'Empresa',
        title: 'Página 3',
        description: 'Descrição de Página 3',
      }
      break

    case '/pagina4':
      info = {
        category: 'Financeiro',
        title: 'Página 4',
        description: 'Descrição de Página 4',
      }
      break

    case '/pagina5':
      info = {
        category: 'Financeiro',
        title: 'Página 5',
        description: 'Descrição de Página 5',
      }
      break

    case '/reporter':
      info = {
        category: 'Financeiro',
        title: 'Relatório de Utilização do Sistema',
        description: 'Relatório de Utilização do Sistema no Primeiro Semestre de 2017',
      }
      break

    default:
      info = {
        category: '',
        title: 'Página Não Encontrada',
        description: '',
      }
      break

  }

  return info

}
