const candidateBlock = document.querySelector(".candidate-block");
const searchForm = document.querySelector(".search-form");

const candidates = [
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-1.svg",
    age: "42",
    salary: "1000",
    sex: "male",
  },
  {
    name: "Татьяна Петрова",
    image: "./assets/img/Avatar_candidate-2.svg",
    age: "30",
    salary: "1500",
    sex: "female",
  },
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-3.svg",
    age: "35",
    salary: "2000",
    sex: "male",
  },
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-1.svg",
    age: "42",
    salary: "1000",
    sex: "male",
  },
  {
    name: "Татьяна Петрова",
    image: "./assets/img/Avatar_candidate-2.svg",
    age: "30",
    salary: "1500",
    sex: "female",
  },
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-3.svg",
    age: "35",
    salary: "2000",
    sex: "male",
  },
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-1.svg",
    age: "42",
    salary: "1000",
    sex: "male",
  },
  {
    name: "Татьяна Петрова",
    image: "./assets/img/Avatar_candidate-2.svg",
    age: "30",
    salary: "1500",
    sex: "female",
  },
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-3.svg",
    age: "35",
    salary: "2000",
    sex: "male",
  },
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-1.svg",
    age: "42",
    salary: "1000",
    sex: "male",
  },
  {
    name: "Татьяна Петрова",
    image: "./assets/img/Avatar_candidate-2.svg",
    age: "30",
    salary: "1500",
    sex: "female",
  },
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-3.svg",
    age: "35",
    salary: "2000",
    sex: "male",
  },
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-1.svg",
    age: "42",
    salary: "1000",
    sex: "male",
  },
  {
    name: "Татьяна Петрова",
    image: "./assets/img/Avatar_candidate-2.svg",
    age: "30",
    salary: "1500",
    sex: "female",
  },
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-3.svg",
    age: "35",
    salary: "2000",
    sex: "male",
  },
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-1.svg",
    age: "42",
    salary: "1000",
    sex: "male",
  },
  {
    name: "Татьяна Петрова",
    image: "./assets/img/Avatar_candidate-2.svg",
    age: "30",
    salary: "1500",
    sex: "female",
  },
  {
    name: "Сергей Васильев",
    image: "./assets/img/Avatar-candidate-3.svg",
    age: "35",
    salary: "2000",
    sex: "male",
  },
];

function render(array) {
  candidateBlock.innerHTML = "";
  array.forEach((item) => {
    candidateBlock.innerHTML += `
        <div class="card">
        <div class="card-about">
        <div class="time">
                <span class="part-time">part-time</span>
                <span class="full-time">full-time</span>
                </div>
                <img src=${item.image} alt="avatar" />
                <span class="name">${item.name}</span>
                <span class="job">QA-тестировщик</span>
                <span class="ex">Опыт: более 5 лет</span>
                <span class="salary">Зарплата: от ${item.salary} €</span>
                </div>
                <button class="card-btn">Посмотреть справку</button>
                </div>
                `;
  });
}

function gettingData() {
  localStorage.setItem("data", JSON.stringify(candidates));
  const data = JSON.parse(localStorage.getItem("data"));
  render(data);
}
gettingData();

function searchVal(str) {
  const data = JSON.parse(localStorage.getItem("data"));
  const newData = data.filter((item) => {
    for (key in item) {
      if (item[key].includes(str)) {
        return item;
      }
    }
  });
  render(newData);
}

searchForm.addEventListener("input", (e) => {
  let str = e.target.value;
  searchVal(str);
});

const salaryStart = document.querySelector(".inp-salary-start");
const salaryEnd = document.querySelector(".inp-salary-end");
const ageStart = document.querySelector(".inp-age-start");
const ageEnd = document.querySelector(".inp-age-end");

const btnFilter = document.querySelector("#btn-submit-filter");

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", () => {
  salaryStart.value = "";
  salaryEnd.value = "";
});

function filterSalary(objS) {
  const data = JSON.parse(localStorage.getItem("data"));
  const newData = data.filter(
    (item) => item.salary >= objS.start && item.salary <= objS.end
  );
  render(newData);
  //   return newData;
}

const objS = {};
salaryStart.addEventListener("input", (e) => {
  objS.start = e.target.value;
});

salaryEnd.addEventListener("input", (e) => {
  objS.end = e.target.value;
});

// btnFilter.addEventListener("click", () => {
//   const salaryCards = filterSalary(objS);
//   console.log(salaryCards);
//   const ageCards = filterAge(objA);
//   console.log(ageCards);
//   console.log(typeof ageCards);
//   let result = salaryCards.filter((x) => ageCards.includes(x));
//   //   render(result);
// });

function filterAge(objA) {
  const data = JSON.parse(localStorage.getItem("data"));
  const newData = data.filter(
    (item) => item.age >= objA.start && item.age <= objA.end
  );
  render(newData);
  //   return newData;
}

const objA = {};
ageStart.addEventListener("input", (e) => {
  objA.start = e.target.value;
});

ageEnd.addEventListener("input", (e) => {
  objA.end = e.target.value;
});

// Рабочая версия
// btnFilter.addEventListener("click", () => {
//   //   if (filterAge(objA) == undefined) {
//   //     filterSalary(objS);
//   //   } else if (filterSalary(objS) == undefined){
//   //     filterAge(objA);
//   //   }
//   if (filterAge(objA) === undefined) {
//     filterSalary(objS);
//   } else {
//     filterAge(objA);
//   }
//   //   console.log(typeof filterSalary(objS));
//   //   console.log(typeof filterAge(objA));
//   //   console.log(typeof ageCards);
//   //   let result = salaryCards.filter((x) => ageCards.includes(x));
//   //   render(result);
// });

const radio1 = document.querySelector('#radio1')
const radio2 = document.querySelector('#radio2')
const radio3 = document.querySelector('#radio3')

function filterRadio() {
  const data = JSON.parse(localStorage.getItem("data"));
  const newData = data.filter((item) => item.sex);
  render(newData)
}


radio1.addEventListener('click', () => {
    filterRadio()
})