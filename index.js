const grades = [...new Array(12)].map(function(){
    return Math.ceil(Math.random() *100)
})

const summ = grades.reduce(function(a, b) {
    return a + b;
  });

  const average = summ/grades.length
  console.log(grades)
  console.log(summ)
  console.log('средний балл студентов:', average)
  const max_num = Math.max(...grades)
  console.log('максимальный балл среди студентов:', max_num)
  const min_num = Math.min(...grades)
  console.log('минимальный балл среди студентов:', min_num)
  
  const positive_assessment = grades.filter(function(element){
    return element >= 60
  })
  console.log('количество студентов, получивших положительную оценку:', positive_assessment.length)
  const negative_assessment = grades.filter(function(element){
    return element < 60
  })
  console.log('количество студентов, получивших отрицательную оценку:', negative_assessment.length)

const secondArr = grades.map(function(elem){
        if (elem>=80 && elem<100) return "A";
        if (elem>=60 && elem<79) return "B";
        if (elem>=40 && elem<59) return "C";
        if (elem>=20 && elem<39) return "D";
        if ( elem<20) return "E";
    }
)
console.log(secondArr)
const paragraf = document.getElementById('student_grades')
paragraf.textContent = (`Средний бал: ${average}`)

const paragraf1 = document.getElementById('student_grades1')
paragraf1.textContent = (`Количество студентов, получивших отрицательную оценку: ${negative_assessment.length}`)

const paragraf2 = document.getElementById('student_grades2')
paragraf2.textContent = (`Количество студентов, получивших положительную оценку: ${positive_assessment.length}`)

const paragraf3 = document.getElementById('student_grades3')
paragraf3.textContent = (`Максимальный балл среди студентов:  ${max_num}`)

const paragraf4 = document.getElementById('student_grades4')
paragraf4.textContent = (`Минимальный балл среди студентов: ${min_num}`)

const paragraf5 = document.getElementById('student_grades5')
paragraf5.textContent = (`Распределение A/B/C/D/E:  ${secondArr}`)
