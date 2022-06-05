//build a tower such that floor 1 is '  *  ' and floor 2 is ' *** ' and floor 3 is '*****'.  It is a 3 story building.
function towerBuilder(nFloors) {
  //saw pattern of 2x+1 in *,***,***** - constant first difference of 2 starting at 1
  let stars = Array(nFloors).fill('*').map((e,item)=>e.repeat(2*item+1))
  //didn't realize I needed spaces, so created one sided spaces * floors-index
  let spaces = Array(nFloors).fill(' ').map((e,item)=>e.repeat(nFloors-item-1))
  //create empty array and then concatenate terms
  let looptyLoo = []
  for(i=0;i<stars.length;i++){
      looptyLoo.push(spaces[i]+stars[i]+spaces[i])
  }
  return looptyLoo
}
console.log(towerBuilder(10))
/*best solutions found: function towerBuilder(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}*/