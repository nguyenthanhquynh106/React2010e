// Bài 1
// In một bảng nhân của một số bất kỳ với các số từ 1 tới 10 và hiển thị kết quả
const showMultiplicationTable = number => {
  console.log('In bảng nhân:')
  for (let i = 1; i <= 10; i++) {
    console.log(`\t${number} x ${i} =`, number * i)
  }
}

// Bài 2
// Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30. In các số chẵn từ 1 đến n. Vd n = 6: in ra: 2 4 6
const getEvenNumbers = number => {
  if (number < 1 || number > 30) return
  for (let i = 2; i <= number; i += 2) {
    console.log(i)
  }
}

// Bài 3
// Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30. Tính tổng từ 1 đến n
// vd nhập vào 6: Tổng = 1 + 2 + 3 + 4 + 5 + 6 = 21
const calcSum = number => {
  if (number < 1 || number > 30) return
  let sum = 0
  for (let i = 1; i <= number; i++) {
    sum += i
  }
  return sum
}

// Bài 4
// Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30. In ra n! (giai thừa của n)
const calcFactorial = number => {
  if (number < 1 || number > 30) return
  let factorial = 1
  for (let i = 1; i <= number; i++) {
    factorial *= i
  }
  return factorial
}

// Bài 5
// Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn
// Vd: param là [1, 2, 3, 6, 2, 9, 0] thì return 4 vì có 4 số chẵn
const countEvenNumbers = arr => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2)) {
      count++
    }
  }
  return count
}

// Bài 6
// Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên. Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp
// Vd params:
// ['A', 'C', 'A', 'A', 'B', 'D', 'B']
// Thì return:
// return ['A', 'C', 'B', 'D']
arr = ['A', 'C', 'A', 'A', 'B', 'D', 'B']
const getUniqueElements = arr => {
  return [...(new Set(arr))]
}
//Solution2
// arr = ['A', 'C', 'A', 'A', 'B', 'D', 'B']
// const getUniqueElements = arr => {
//   let newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     if (newArray.indexOf(arr[i]) === -1) {
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }

// Bài 7
// Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score từ 2 array sau:
// const studentNames = [
//     { id: 1, name: 'Nguyễn Thị Tèo' },
//     { id: 2, name: 'Phạm Văn Bưởi' },
//     { id: 3, name: 'Hoàng Văn Nam' },
//     { id: 4, name: 'Vũ Ngọc Duy' },
//     { id: 5, name: 'Nguyễn Minh Nhật' },
//     { id: 6, name: 'Phí Duy Quân' },
//     { id: 7, name: 'Trần Minh Minh' }
// ]
// const studentScores = [
//     { id: 1, score: 9.2 },
//     { id: 2, score: 2.3 },
//     { id: 3, score: 3.7 },
//     { id: 4, score: 6.9 },
//     { id: 5, score: 5.2 },
//     { id: 6, score: 9.6 },
//     { id: 7, score: 6.1 }
// ]
// Yêu cầu mảng cần tạo phải là:
// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]
const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
]
const getStudentArray = (studentNames, studentScores) => {
  studentNames.forEach(studentName => {
    studentScores.forEach(studentScore => {
      if (studentName.id === studentScore.id) {
        studentName.score = studentScore.score
      }
    })
  })
  return studentNames
}

// Bài 8
// Cho array dưới đây là danh sách các students
// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]
// Hãy tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất
// Với format đầu ra dạng:
// return {
//     theBest: { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     theBad: { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 }
// }
const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const getStudentRanking = (students = []) => {
  const theBest = []
  const theBad = []
  if (!students.length) return {
    theBest,
    theBad
  }
  let min = students[0].score
  let max = students[0].score

  students.forEach(student => {
    if (max < student.score) {
      max = student.score
    }
    if (min > student.score) {
      min = student.score
    }
  })

  students.forEach(student => {
    if (student.score === max) {
      theBest.push(student)
    }
    if (student.score === min) {
      theBad.push(student)
    }
  })

  return {
    theBest,
    theBad
  }
}
