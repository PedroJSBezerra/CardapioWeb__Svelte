import Home from './Home.svelte'
import Cardapio from './Cardapio.svelte'
import Horarios from './Horarios.svelte'
import QuemSomos from './QuemSomos.svelte'

export const routes = {
  '/': Home,
  '/cardapio': Cardapio,
  '/horarios': Horarios,
  '/quemsomos': QuemSomos,
}

export const menuLinks = [
  {
    name: "Início",
    url: "/",
  },
  {
    name: "Cardápio",
    url: "/cardapio",
  },
  {
    name: "Horários",
    url: "/horarios",
  },
  {
    name: "Quem Somos",
    url: "/quemsomos",
  },
]