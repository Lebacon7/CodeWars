//incomplete
function points(games) {
  games.map(e=>e=e[0]+e[1])
  console.log(games)
  return games
}

console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))