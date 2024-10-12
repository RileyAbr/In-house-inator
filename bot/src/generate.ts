import * as fs from 'fs'

async function generateChampionList() {
  const res = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/14.20.1/data/en_US/champion.json',
  )
  const json = await res.json()

  const data = json.data

  const championMap = []

  for (const idName in data) {
    if (Object.prototype.hasOwnProperty.call(data, idName)) {
      const rawChampionData = data[idName]
      const championData = {
        id: rawChampionData.id,
        key: rawChampionData.key,
        name: rawChampionData.name,
        title: rawChampionData.title,
        image: rawChampionData.image,
      }

      championMap.push(championData)
    }
  }

  fs.writeFileSync(
    'src/data/champions.json',
    JSON.stringify(championMap),
    'utf8',
  )
}

generateChampionList()

export {}
