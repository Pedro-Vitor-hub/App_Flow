# 🎙️ PodCast Menager

## 📌 Sobre o projeto

O **PodCast Menager** é uma aplicação inspirada na Netflix, criada para centralizar e organizar episódios de podcasts em vídeo em um único lugar.

A proposta é facilitar a descoberta de episódios por meio de categorias e permitir que os usuários encontrem conteúdos de seus podcasts favoritos.

## 🚀 Funcionalidades

- [x] Listar episódios de podcasts.
- [x] Organizar episódios por categorias.
- [x] Filtrar episódios pelo nome do podcast.
- [ ] Disponibilizar informações sobre cada episódio.
- [ ] Facilitar o acesso aos vídeos por meio de links.

## 📂 Categorias

Os episódios poderão ser organizados em diferentes categorias, como:

- 🩺 Saúde
- 💪 Fitness
- 🧠 Mentalidade
- 😂 Humor
- 🏎️ Esportes

## 📋 Estrutura dos dados

Cada episódio será representado por um objeto contendo as seguintes informações:

```json
{
  "podCastName": "Flow",
  "episode": "CBUM - Flow #139",
  "cover": "https://exemplo.com/capa.jpg",
  "link": "https://exemplo.com/episodio",
  "categories": ["saude", "fitness"]
}
```

### Descrição dos campos

| Campo | Descrição |
|---|---|
| `podCastName` | Nome do podcast. |
| `episode` | Nome do episódio. |
| `cover` | URL da imagem de capa. |
| `link` | Link para assistir ao episódio. |
| `categories` | Lista de categorias relacionadas ao episódio. |

## 🔎 Exemplo de filtragem

A aplicação permitirá filtrar os episódios pelo nome do podcast.

Por exemplo, ao pesquisar por `Flow`, a API poderá retornar todos os episódios cadastrados desse podcast.

```json
[
  {
    "podCastName": "Flow",
    "episode": "CBUM - Flow #139",
    "cover": "https://exemplo.com/capa1.jpg",
    "link": "https://exemplo.com/episodio1",
    "categories": ["saude", "fitness"]
  },
  {
    "podCastName": "Flow",
    "episode": "Rubens Barrichello - Flow #339",
    "cover": "https://exemplo.com/capa2.jpg",
    "link": "https://exemplo.com/episodio2",
    "categories": ["esporte", "corrida"]
  }
]
```

## 🛠️ Tecnologias

O projeto será desenvolvido utilizando tecnologias voltadas para a criação de uma API REST.

- **Node.js** — ambiente de execução JavaScript.
- **TypeScript** — tipagem estática para JavaScript.
- **API REST** — disponibilização dos dados dos episódios.

## 🎯 Objetivo

O objetivo do projeto é praticar o desenvolvimento de uma API REST, a organização de dados e a implementação de filtros, além de construir um projeto para compor meu portfólio de desenvolvedor.

Desenvolvido como projeto de estudo e portfólio.
