let inputName = document.querySelector("#inputName")
let inputSurName = document.querySelector("#inputSurName")
let inputFam = document.querySelector("#inputFam")
let inputYearBirth = document.querySelector("#inputYearBirth")
let inputYearStudy = document.querySelector("#inputYearStudy")
let inputFaculty = document.querySelector("#inputFaculty")
const form = document.querySelector("#form")
let letSortName = document.querySelector("#buttonSortName")
let letSortFaculty = document.querySelector("#buttonSortFaculty")
let letSortBirtday = document.querySelector("#buttonSortBirtday")
let letSortStartStudy = document.querySelector("#buttonSortStartStudy")
let i = 0;
let date1 = 0;
let date2 = 0;
let date3 = 0;
let tableStudents = document.querySelector("#table")
let tdName = document.querySelector("#name")
let tdSurName = document.querySelector("#surName")
let tdinputFam = document.querySelector("#Fam")
let tdYearBirth = document.querySelector("#yearBirth")
let tdYearStudy = document.querySelector("#YearStudy")
let tdFaculty = document.querySelector("#Faculty")
let student;
let Data = []
let Data2 = []
let currentDate = new Date();
let template2 = 0;
let inputFilterName = document.querySelector("#inputFilterName")
let inputFilterfaculty = document.querySelector("#inputFilterfaculty")
let inputFilterFaculty = document.querySelector("#inputFilterFaculty")
let inputFilterYearEndStudy = document.querySelector("#inputYearEndStudy")
let inputFilterYearStudy = document.querySelector("#inputFilterYearStudy")

letSortName.addEventListener(`click`, sortName);
letSortFaculty.addEventListener(`click`, sortFaculty);
letSortBirtday.addEventListener(`click`, sortBirtday);
letSortStartStudy.addEventListener(`click`, SortStartStudy);
inputFilterName.addEventListener(`input`, filteredName)
inputFilterFaculty.addEventListener(`input`, filteredFaculty)
inputFilterYearStudy.addEventListener(`input`, filteredYearStudy)
inputFilterYearEndStudy.addEventListener(`input`, filteredEndStudy)
let date4=0;
let date5=0;


function filteredEndStudy() {
    tableStudents.innerHTML = ``;
	Data2 = []
    i = 0;
	date4=0;
	date5=0;
	
    //Проходим по не сортированному массиву
    for (i = 0; i <= Data.length - 1; i++) {
        date4=new Date(Data[i].startStyde)
		date4=date4.getFullYear()
		date5=inputFilterYearEndStudy.value;
		date5=new Date(inputFilterYearEndStudy.value);
		date5=date5.getFullYear()
		//выбираем совпадающие значения  
        if (date4+4===date5) {
            Data2.push(Data[i])
			
		
        }
    } //формируем и выводим отфильтрованную таблицу
   console.log(Data2);
    for (i = -1; i <= Data2.length;) {
       
        if (i === -1) {
			
            SortedNameHead()
            addDataTable(tableStudents, template2)
			i=i+1;
        } else {
			
            generateStudentFilter(i)
            addDataTable(tableStudents, template2)
			i=i+1;
        }
    }
}

function filteredYearStudy() {
    tableStudents.innerHTML = ``;
	Data2 = []
    i = 0;
	
    //Проходим по не сортированному массиву
    for (i = 0; i <= Data.length - 1; i++) {
        date4=new Date(Data[i].startStyde)
		date4=date4.getFullYear()
		date5=inputYearStudy.value;
		date5=new Date(inputFilterYearStudy.value);
		date5=date5.getFullYear()
		//выбираем совпадающие значения  
        if (date4===date5) {
            Data2.push(Data[i])
			
		
        }
    } //формируем и выводим отфильтрованную таблицу
   console.log(Data2);
    for (i = -1; i <= Data2.length;) {
       
        if (i === -1) {
			
            SortedNameHead()
            addDataTable(tableStudents, template2)
			i=i+1;
        } else {
			
            generateStudentFilter(i)
            addDataTable(tableStudents, template2)
			i=i+1;
        }
    }
}

function filteredFaculty() {
    tableStudents.innerHTML = ``;
	Data2 = []
    i = 0;
    //Проходим по не сортированному массиву
    for (i = 0; i <= Data.length - 1; i++) {
        //выбираем совпадающие значения  
        if ((Data[i].faculty.indexOf(inputFilterFaculty.value) + 1) > 0) {
            Data2.push(Data[i])
        }
    } //формируем и выводим отфильтрованную таблицу
   console.log(Data2);
    for (i = -1; i <= Data2.length;) {
       
        if (i === -1) {
			
            SortedNameHead()
            addDataTable(tableStudents, template2)
			i=i+1;
        } else {
			
            generateStudentFilter(i)
            addDataTable(tableStudents, template2)
			i=i+1;
        }
    }
}

function filteredName() {
    tableStudents.innerHTML = ``;
	Data2 = []
    i = 0;
    //Проходим по не сортированному массиву
    for (i = 0; i <= Data.length - 1; i++) {
        //выбираем совпадающие значения  
        if ((Data[i].fullName.indexOf(inputFilterName.value) + 1) > 0) {
            Data2.push(Data[i])
        }
    } //формируем и выводим отфильтрованную таблицу
   console.log(Data2);
    for (i = -1; i <= Data2.length;) {
       
        if (i === -1) {
			
            SortedNameHead()
            addDataTable(tableStudents, template2)
			i=i+1;
        } else {
			
            generateStudentFilter(i)
            addDataTable(tableStudents, template2)
			i=i+1;
        }
    }
}

function SortedNameHead(i) {
    return template2 = `<tr>
	
	<td style="border:1px solid black">Фамилия,Имя и Отчество</td>
	<td style="border:1px solid black">Факультет</td>
    <td style="border:1px solid black">Дата рождения </td>
	<td style="border:1px solid black">Год начала обучения</td>
	</tr>`
}


function generateStudentFilter(i) {
    date1 = new Date('2020.01.01').getFullYear();
    date2 = new Date(Data[i].birtday).getFullYear();
    date3 = new Date(Data[i].startStyde).getFullYear();
    year = (date1 - date2);
    course = (date1 - date3)
    if (course === 0) {
        course = 1
    }
    if (course > 4) {
        course = "(Закончил)"
    } else {
        course = "(" + course + " " + "курс )"
    }
    return template2 = `<tr>
	
	<td style="border:1px solid black">${Data2[i].fullName}</td>
	<td style="border:1px solid black">${Data2[i].faculty}</td>
    <td style="border:1px solid black">${Data2[i].birtday}( ${year} лет ) </td>
	<td style="border:1px solid black">${Data2[i].startStyde}${course}</td>
	</tr>`
}

function generateStudentSortName(i) {
    date1 = new Date('2020.01.01').getFullYear();
    date2 = new Date(Data[i].birtday).getFullYear();
    date3 = new Date(Data[i].startStyde).getFullYear();
    year = (date1 - date2);
    course = (date1 - date3)
    if (course === 0) {
        course = 1
    }
    if (course > 4) {
        course = "(Закончил)"
    } else {
        course = "(" + course + " " + "курс )"
    }
    return template2 = `<tr>
	
	<td style="border:1px solid black">${Data[i].fullName}</td>
	<td style="border:1px solid black">${Data[i].faculty}</td>
    <td style="border:1px solid black">${Data[i].birtday}( ${year} лет ) </td>
	<td style="border:1px solid black">${Data[i].startStyde}${course}</td>
	</tr>`
}

function SortStartStudy() {
    i = 0;
    tableStudents.innerHTML = ``;
    Data.sort(function(a, b) {
        if (a.startStyde > b.startStyde) {
            return 1;
        }
        if (a.startStyde < b.startStyde) {
            return -1;
        }
        return 0;
        console.log(Data)
    });
    for (i = 0; i <= Data.length; i++) {
        if (i === 0) {
            SortedNameHead()
            addDataTable(tableStudents, template2)
        }
        generateStudentSortName(i)
        addDataTable(tableStudents, template2)
    }
}

function sortFaculty() {
    i = 0;
    tableStudents.innerHTML = ``;
    Data.sort(function(a, b) {
        if (a.faculty > b.faculty) {
            return 1;
        }
        if (a.faculty < b.faculty) {
            return -1;
        }
        return 0;
        console.log(Data)
    });
    for (i = 0; i <= Data.length; i++) {
        if (i === 0) {
            SortedNameHead()
            addDataTable(tableStudents, template2)
        }
        generateStudentSortName(i)
        addDataTable(tableStudents, template2)
    }
}

function sortBirtday() {
    i = 0;
    tableStudents.innerHTML = ``;
    Data.sort(function(a, b) {
        if (a.birtday > b.birtday) {
            return 1;
        }
        if (a.birtday < b.birtday) {
            return -1;
        }
        return 0;
        console.log(Data)
    });
    for (i = 0; i <= Data.length; i++) {
        if (i === 0) {
            SortedNameHead()
            addDataTable(tableStudents, template2)
        }
        generateStudentSortName(i)
        addDataTable(tableStudents, template2)
    }
}

function sortName() {
    i = 0;
    tableStudents.innerHTML = ``;
    Data.sort(function(a, b) {
        if (a.fullName > b.fullName) {
            return 1;
        }
        if (a.fullName < b.fullName) {
            return -1;
        }
        return 0;
        console.log(Data)
    });
    for (i = 0; i <= Data.length; i++) {
        if (i === 0) {
            SortedNameHead()
            addDataTable(tableStudents, template2)
        }
        generateStudentSortName(i)
        addDataTable(tableStudents, template2)
    }
}

function cap(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase()
}

function addDataTable(container, template) {
    container.insertAdjacentHTML(`beforeEnd`, template)
}

function generateStudentData(student) {
    date1 = new Date('2020.01.01').getFullYear();
    date2 = new Date(student.birtday).getFullYear();
    date3 = new Date(student.startStyde).getFullYear();
    year = (date1 - date2);
    course = (date1 - date3)
    if (course === 0) {
        course = 1
    }
    if (course > 4) {
        course = "(Закончил)"
    } else {
        course = "(" + course + " " + "курс )"
    }
    return `<tr>
	
	<td style="border:1px solid black">${student.fullName}</td>
	<td style="border:1px solid black">${student.faculty}</td>
    <td style="border:1px solid black">${student.birtday}( ${year} лет ) </td>
	<td style="border:1px solid black">${student.startStyde}${course}</td>
	</tr>`
}

function addStudent() {
    student = {
        fullName: (cap(inputName.value) + " " + cap(inputSurName.value) + " " + cap(inputFam.value)),
        birtday: inputYearBirth.value,
        startStyde: inputYearStudy.value,
        faculty: cap(inputFaculty.value)
    }
    return student;
}
form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    if ((inputName.value.trimLeft() === "") || (inputSurName.value.trimLeft() === "") || (inputFam.value.trimLeft() === "") || (inputFaculty.value.trimLeft() === "")) {
        alert("Введено не правильное значение");
        return;
    }
    let DataBirth = new Date(inputYearBirth.value);
    let dateStartCourse = new Date('1900.01.01');
    let dateStartCourse2 = new Date('2000.01.01');
    let YearStudy = new Date(inputYearStudy.value);
    if ((currentDate > YearStudy) && (YearStudy > dateStartCourse2)) {} else {
        alert("Дата начала курса не корректна");
        return;
    }
    if ((currentDate > DataBirth) && (DataBirth > dateStartCourse)) {} else {
        alert("Дата рождения не корректна");
        return;
    }
	
    Data.push(addStudent())
    template = generateStudentData(student);
    addDataTable(tableStudents, template)
	

    inputName.value= ""
	inputSurName.value= ""
	inputFam.value= ""
	inputFaculty.value= ""
	inputYearBirth.value = ""
    inputYearStudy.value=""
})