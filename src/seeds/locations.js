const locations = [{
  name: '絶望の断崖',
  path: 'despair_cliff',
  description: 'かつては絶景を拝める名所として知られていたが、魔物が住み着いてから多くの人が命を奪われている。それが絶望の所以である。'
},{
  name: '追憶の墓標',
  path: 'retrospective_grave',
  description: '無縁仏が埋葬されている墓地がある。得体の知れないものが出没すると噂が立ってから、顧みる人の姿も消えた。'
},{
  name: '渇望の死火山',
  path: 'dead_volcano',
  description: '頻発する噴火活動のため多くの死者を出した火山が、数年前にようやく活動を終えた。しかし、そこに眠る屍が生あるものを拒み続けている。'
}]


locations.forEach((l,i) => l.id = i)

export default locations
