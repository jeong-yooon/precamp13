const classmates = ['정윤', '현기', '혜린']
// undefined
classmates
// (3) ['정윤', '현기', '혜린']
classmates[1]
// '현기'
classmates.includes("재훈")
// false
classmates.push("재훈")
// 4
classmates
// (4) ['정윤', '현기', '혜린', '재훈']
classmates.includes("재훈")
// true
classmates.pop()
// '재훈'
classmates
// (3) ['정윤', '현기', '혜린']
classmates.length
// 3