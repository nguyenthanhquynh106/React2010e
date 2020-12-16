// Bài 1
// Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp
// Vd đầu vào là:
// ('ahihi', 3)
// Thì Kết quả là:
// ['ahihi', 'ahihi', 'ahihi']
// Yêu cầu, viết ít nhất 2 cách khác nhau
// --------------------------------------
// Solution1
const getArray = (string, number) => {
  const arr = []
  for (let i = 1; i <= number; i++) {
    arr.push(string)
  }
  return arr
}
// Solution2
const showArray = (string, number) => {
  const arr = []
  for (let i = 0; i < number; i++) {
    arr.splice(i, 0, string)
  }
  return arr
}

//   Bài 2
//   Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm array.reverse()
//   Vd input:
//   ['a', 1, '9', 'apple']
//   Thì output phải là:
//   ['apple', '9', 1, 'a']
//   --------------------------------------
const reverseArray = array => {
  const newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.unshift(array[i])
  }
  return newArr
}

// Bài 3
// Xóa đi các giá trị được xem là sai
// Vd intput:
// [0, 1, false, 2, undefined, '', 3, null]
// Thì output là:
// [1, 2, 3]
// --------------------------------------
const getTrueArray = array => array.filter(Boolean) //const getTrueArray = array => array.filter(e => Boolean(e))

// Bài 4
// Tạo ra 1 object có key và value tương ứng cặp array ban đầu
// Vd intput:
//   const data = [['a', 1], ['b', 2]]
// Thì output là:
// { a: 1, b: 2 }
// --------------------------------------
const convertArrayToObject = array => {
  const newObj = {}
  array.forEach(arr => {
    newObj[arr[0]] = arr[1]
  })
  return newObj
};

// Bài 5
// Sắp xếp mảng tăng dần
// Vd intput:
// [6, 4, 0, 3, -2, 1]
// Thì output là:
// [-2, 0, 1, 3, 4, 6]
// --------------------------------------
const sortArray = array => array.sort((a, b) => a - b)

// Bài 6
// Kiểm tra input đầu vào có phải là object hay không?
// Vd input là:
// const data = { a: 1 }
// return true
// const data = [1, 2, 3]
// return false
// --------------------------------------
const isObject = obj => (typeof obj === 'object' && !Array.isArray(obj))

//   Bài 7
//   Viết 1 hàm trả về các key+value (của 1 object) khác các key truyền vào Vd:
const obj = { a: 1, b: 2, c: 3, d: 4 }
//   Truyền vào a, c
//   return { b: 2, d: 4 }
// --------------------------------------
const getRestObj = (object, array) => {
  newObj = {}
  for (let key in object) {
    newObj[key] = object[key]
  }

  for (let key in newObj) {
    array.forEach(arr => {
      if (key === arr) {
        delete newObj[key]
      }
    })
  }
  return newObj
}

// Bài 8
// Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array 
// Return mảng sau khi đã xóa
// --------------------------------------
const getArrayAfterDeleted = array => {
  if (array.length < 5) return
  array.splice(2, 2)
  return array
}

// Bài 9
// Viết hàm nhập vào 1 array có cấu trúc như ví dụ sau:
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
// Hãy tạo 1 array mới, với cấu trúc sau:
// ['Pass', 'Fail', 'Fail', 'Pass', 'Pass', 'Fail', 'Pass']
// Điều kiện Pass:
// Điểm trên 5.0 và không có chữ Duy là tên đệm
// --------------------------------------
const createCheckedArray = array => {
  var newArr = []
  array.forEach(student => {
    const { name, score } = student
    if (score <= 5 || (name.indexOf('Duy') > 0 && name.indexOf('Duy') < name.length - 3)) {
      newArr.push('Fail')
    } else {
      newArr.push('Pass')
    }
  })
  return newArr
}

// Bài 10
// Cho array có cấu trúc như input bài 9
// Hãy tìm các students có điểm là số mà tổng số nút của phần trước dấu thập phân và phần sau dấu thập phân cộng lại lớn hơn 5
// Vd: 6.9 -> 6 + 9 = 5 (không lấy)
// 3.7 -> 3 + 7 = 0 (không lấy) 5.2 -> 5 + 2 = 7 (lấy)
// --------------------------------------
const findStudentsByScore = students => {
  const newArr = []
  students.forEach(student => {
    const score = String(student.score)
    const [firstNum, lastNum] = score.split('.')
    const total = Number(firstNum) + Number(lastNum)
    if (total % 10 > 5) {
      newArr.push(student)
    }
  })
  return newArr
}
  