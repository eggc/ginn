const spices = [{
  name: '聖教会の加護',
  description: 'クエスト開始前に教会へ赴き、邪気を退ける加護の祈りを受ける。宗教的理由、あるいは信条から拒絶する者もいるが、霊的性質を持つ魔物に対しては少なからず効果があるようだ。'
},{
  name: '報奨金',
  description: 'クエストの成功に最も貢献した者へ報奨金を出すことを確約し、冒険者を鼓舞する。'
},{
  name: '備品の新調',
  description: '新たな武器や防具を提供することで戦力を増強するとともに、冒険者を鼓舞する。'
}]

spices.forEach((s, i) => s.id = i)

export default spices
