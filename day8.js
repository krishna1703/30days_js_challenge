//        days 6  es6 features   

// activities 1  
 const person  = "krishna";
 const age = 33;
 console.log(`name: ${person} and age :${age}`)

 const multylinestring = `${person} is of ${age} years old.`
 console.log(multylinestring)

 // activities 2   destucturing

//  array 
 const even_num = [10, 12, 24, 76, 88, 100];
 [first_elmt, second_elmt] = even_num;

 console.log(`first_elmt: ${first_elmt} second_elmt: ${second_elmt}`);

 const book = {
    title: "Gora",
    author: "Rabindranath Tagore",
    year: 1910,
    country: "India",
  };

//   object

   const {title , year} = book;
   console.log(title, year)


 // activities 3 rest and spread opt

// spread

 const b = [10,20,30,...even_num]
 console.log(b)


//  rest


function sum(...num){

 const sum = num.reduce((acc,cuuval)=> acc+cuuval , 0)

 console.log(sum)

}
sum(11,22,33,44)

// activities 4  default parameter


function name(num1,num2=1  ) {
    return   num1+num2
}

name(4,10)
console.log(name(4))
console.log(name(4,10))

// activities 5 Enhanced Object literals

const student1 = {
    student_name: "Pavi",
    std: "Eleventh",
    school: "RJ college of science",
    physics: 89,
    chem: 71,
    Maths: 90,
    Bio: 50,
    CS: 78,
    calculate_percentage: function () {
      const marks_obtained = Number(
        this.physics + this.chem + this.Maths + this.Bio + this.CS
      );
      const total_marks = 500;
      const percentage_obtained = (marks_obtained / total_marks) * 100;
      return percentage_obtained;
    },
  };
  console.log("Student object >>>", student1);
  console.log(
    "Percentage obtained by: ",
    student1.student_name,
    student1.calculate_percentage()
  );


  const var1 = "student_name";
const var2 = "percentage";

const student2 = {
  [var1]: "Sach",
  std: 12,
  school: "Don Bosco College",
  subject_marks: { physics: 78, maths: 87, chem: 67, bio: 78, CS: 89 },
  calculate_percentage: function () {
    const marks_obtained = Number(
      this.subject_marks.physics +
        this.subject_marks.maths +
        this.subject_marks.chem +
        this.subject_marks.bio +
        this.subject_marks.CS
    );
    const total_marks = 500;
    const percentage_obtained = (marks_obtained / total_marks) * 100;
    return percentage_obtained.toFixed(2);
  },
  [var2]: function () {
    return this.calculate_percentage();
  },
};
console.log(">>>>>>", student2);
console.log(
  "Student name:",
  student2[var1],
  "got",
  student2[var2](),
  "percentage"
);