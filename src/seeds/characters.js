const characters = [{
  title: "逆巻く炎",
  name: "ミティ",
  ability: "楔形文字の読解",
  description: "",
  power: 10
}, {
  title: "不倒の戦士",
  name: "アレン",
  ability: "鉄拳",
  description: "",
  power: 10
},{
  title: "月と波の巫女",
  name: "オリビエ",
  ability: "オラクル",
  description: "",
  power: 10
},{
  title: "揺蕩うもの",
  name: "ソルブ",
  ability: "詩吟",
  description: "",
  power: 10
},{
  title: "重戦車",
  name: "マルテンサイト",
  ability: "鉄壁",
  description: "",
  power: 12
}]

characters.forEach((c,i) => c.id = i)

export default characters
