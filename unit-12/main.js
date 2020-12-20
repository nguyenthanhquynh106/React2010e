// Bài 1
// Hãy viết 1 hàm nhập vào 2 array, kiểm tra xem 2 array có khớp 100% các value với nhau về cả giá trị và index không
// VD: 
// const arr1 = [1, 2, 3, 4]
// const arr2 = [1, 2, 3, 4]
// const arr3 = [1, 2, 3, 5]
// const arr4 = [1, 2, 3, 4, 5]
// isEqual(arr1, arr2) => true
// isEqual(arr1, arr3) => false
// isEqual(arr1, arr4) => false
const compareArrays = (array1, array2) => JSON.stringify(array1) === JSON.stringify(array2);

// Bài 2
// Viết 1 hàm, nhập vào 1 array nhiều chiều (không xác định số chiều). Hãy tạo thành array 1 chiều
// VD:
// const data = [1, 2, [3, 4, [5]]]
// flatten(data) => [1, 2, 3, 4, 5]
const flattenArray = array => array.flat(Infinity)

// Bài 3
// Cắt nhỏ array thành nhiều đoạn, mỗi đoạn có n phần tử. Viết 1 hàm, nhập vào 1 array 1 chiều và 1 số (vd là n) Hãy tạo array 2 chiều, với mỗi array con sẽ chứa n số trong array đã nhập
// VD:
// const data = [1, 2, 3, 4, 5, 6, 7]
// chunk(data, 2) => [[1, 2], [3, 4], [5, 6], [7]]
// chunk(data, 3) => [[1, 2, 3], [4, 5, 6], [7]]
const chunkArray = (array, chunkSize) => {
  let newArr = []
  for (let i = 0; i < array.length; i += chunkSize) {
    newArr.push(array.slice(i, i + chunkSize))
  }
  return newArr
}

// Bài 4
// Viết 1 hàm, nhập vào ít nhất 1 array. Tìm ra các phần tử xuất hiện trong tất cả các array truyền vào
// VD:
// const arr1 = [1, 2]
// const arr2 = [2, 3]
// const arr3 = ['a', 'b']
// const arr4 = ['b', 'c']
// const arr5 = ['b', 'e', 'c']
// const arr6 = ['b', 'b', 'e']
// const arr7 = ['b', 'c', 'e']
// const arr8 = ['b', 'e', 'c']
// intersection(arr1, arr2) => [2]
// intersection(arr3, arr4, arr5) => ['b']
// intersection(arr6, arr7, arr8) => ['b', 'e']
const intersectionArrays = (...arrs) => {
  const result = []
  let lists
  if (arrs.length === 1) {
    lists = arrs[0]
  } else {
    lists = arrs
  }
  for (let i = 0; i < lists.length; i++) {
    let currentList = lists[i]

    for (let j = 0; j < currentList.length; j++) {
      let currentValue = currentList[j]
      if (result.indexOf(currentValue) === -1) {
        let existsInAll = true

        for (let e = 0; e < lists.length; e++) {
          if (lists[e].indexOf(currentValue) === -1) {
            existsInAll = false
            break
          }
        }
        if (existsInAll) {
          result.push(currentValue)
        }
      }
    }
  }
  return result;
}


// Bài 5
// Sử dụng Date trong javascript
// Hãy viết 1 hàm, nhập vào 1 giá trị date sau đó so sánh giá trị vừa nhập với giá trị thời gian sau đây 12 giờ 30phút 32 giây ngày 30 tháng 10 năm 2020
// Kết quả cần return về: equals, before, after Để biết thời gian nhập vào bằng, hay trước, hay sau mốc thời gian đã cho
const date = new Date(2020, 9, 30, 12, 30, 32)
const compareDates = otherDate => {
  if (Date.parse(otherDate) > Date.parse(date)) {
    return "after"
  }
  if (Date.parse(otherDate) < Date.parse(date)) {
    return "before"
  }
  return "equals"
}

// Bài 6
// Viết regex để validate: với email thì phải có định dạng email
const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g
  return (regex.test(email))
}

// Bài 7
// Viết regex để validate: với userName thì tối thiểu phải có 2 ký tự, tối đa 10 ký tự. Các ký tự được phép sử dụng là a-z (viết thường), các số từ 0-9 và dấu _. userName không được bắt đầu bằng số, và không được có 2 dấu _ đứng cạnh nhau.
const validateUserName = (userName) => {
  const regex = /^([a-zA-Z]{1})([a-zA-Z0-9]|_(?!_)){1,9}$/g
  return (regex.test(userName))
}
  