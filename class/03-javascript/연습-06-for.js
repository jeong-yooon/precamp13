let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
  ]
//   undefined
  for(let n = 0; n < persons.length; n++) {
      
      if(persons[n].age > 18) {
          console.log(persons[n].name + ' 님은 성인입니다')
      } else {
      console.log(persons[n].name + ' 님은 미성년자입니다')
      }
  }
//   VM2877:6 철수 님은 미성년자입니다
//   VM2877:4 영희 님은 성인입니다
//   VM2877:6 도우너 님은 미성년자입니다
//   VM2877:6 말포이 님은 미성년자입니다
//   VM2877:6 도비 님은 미성년자입니다
//   undefined