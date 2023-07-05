import { Subjects } from './subjects/Teacher';
import { Subjects as SubjectsNamespace } from './subjects/Cpp';
import { Subjects as SubjectsNamespaceJava } from './subjects/Java';
import { Subjects as SubjectsNamespaceReact } from './subjects/React';

const cpp = new SubjectsNamespace.Cpp();
const java = new SubjectsNamespaceJava.Java();
const react = new SubjectsNamespaceReact.React();

export const cppSubjects = cpp;
export const javaSubjects = java;
export const reactSubjects = react;

const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

cpp.setTeacher(cTeacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log('React');
console
