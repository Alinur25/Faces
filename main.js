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
const sexAll = document.querySelector(".all");
const sexMale = document.querySelector(".male");
const sexFemale = document.querySelector(".female");

const btnFilter = document.querySelector("#btn-submit-filter");

const clearBtn = document.querySelector("#clear-btn");

function filterSalary(obj) {
  const data = JSON.parse(localStorage.getItem("data"));
  let newData = data
  if(obj.salary){
     newData = data.filter(
      (item) => item.salary >= obj.salaryStart && item.salary <= obj.salaryEnd
    );
  }
  if(obj.age){
    newData = newData.filter(
     (item) => item.age >= obj.ageStart && item.age <= obj.ageEnd
   );
  }
  if(obj.sexAll || obj.sexMale || obj.sexFemale){
    newData = newData.filter(
     (item) => {
      if(obj.sexAll){
        return item
      }else if(obj.sexMale){
        return item.sex == 'male'
      }else if(obj.sexFemale){
        return item.sex == 'female'
      }
     }
   );
  }
  render(newData);


}

clearBtn.addEventListener("click", () => {
  salaryStart.value = "";
  salaryEnd.value = "";
  ageStart.value = "";
  ageEnd.value = "";
});

const obj = {};
salaryStart.addEventListener("input", (e) => {
  salaryStart.value ? (obj.salary = true) : (obj.salary = false);
  obj.salaryStart = e.target.value;
});

salaryEnd.addEventListener("input", (e) => {
  salaryEnd.value ? (obj.salary = true) : (obj.salary = false);
  obj.salaryEnd = e.target.value;
});

ageStart.addEventListener("input", (e) => {
  ageStart.value ? (obj.age = true) : (obj.age = false);
  obj.ageStart = e.target.value;
});

ageEnd.addEventListener("input", (e) => {
  ageEnd.value ? (obj.age = true) : (obj.age = false);
  obj.ageEnd = e.target.value;
});

sexAll.addEventListener("click", () => {
  obj.sexAll = true
  obj.sexMale = false
  obj.sexFemale = false
});

sexMale.addEventListener("click", () => {
  obj.sexAll = false
  obj.sexMale = true
  obj.sexFemale = false
});

sexFemale.addEventListener("click", () => {
  obj.sexAll = false
  obj.sexMale = false
  obj.sexFemale = true
});


btnFilter.addEventListener("click", () => {
  console.log(obj);
  filterSalary(obj);
});
