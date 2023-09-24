const studentA = {
  name: "Augusto",
  surname: "Gomez",
  lastNightsleepingHours: 1,
  grade: 10,
  showPresentation: () => {
    console.log(
      `${studentA.name} ${studentA.surname} ha dormido ${studentA.lastNightsleepingHours} horas.`
    );
  },
  setSleepTime: (hours) => {
    if (hours >= 0) {
      return (studentA.lastNightsleepingHours = hours);
    }
  },
  hasSlept: () => studentA.lastNightsleepingHours > 2,
};

const studentB = {
  name: "Adri",
  surname: "Cruzado",
  lastNightsleepingHours: 7,
  grade: 5,
  showPresentation: () => {
    console.log(
      `${studentB.name} ${studentB.surname} ha dormido ${studentB.lastNightsleepingHours} horas.`
    );
  },
  setSleepTime: (hours) => {
    if (hours >= 0) {
      return (studentB.lastNightsleepingHours = hours);
    }
  },
  hasSlept: () => studentB.lastNightsleepingHours > 2,
};

const students = [studentA, studentB];

const showStudentsPresentations = (students) => {
  students.forEach((student) => {
    student.showPresentation();
  });
};

const getStudentsUnderTwoHoursOfSleep = (students) =>
  students.filter((student) => student.lastNightsleepingHours < 2);

const getStudentsWithNewProperties = (students) =>
  students.map((student) => {
    const newArray = {
      ...student,
      nameLength: student.name.length + student.surname.length,
      approved: student.grade > 7 ? true : false,
    };
    return newArray;
  });

//usar el operador spread (...)

const getFullNamesSeparatedByCommas = (students) => {
  const fullNames = students.map((student) => student.name);
  return fullNames.join(", ");
};
