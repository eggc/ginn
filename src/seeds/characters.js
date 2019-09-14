const characters = [{
  title: "炎の魔術師",
  name: "ミティ",
  ability: "炎の術",
  description: "炎の呪文を使う術士。繊細な魔法が不得意なため、灯りや調理用の火力を確保したりすることができない。そのため仕事が見つからず、傭兵部隊に派遣されてしまった。もっと高度な術を学んで、戦場から離れたいと思っている。",
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
