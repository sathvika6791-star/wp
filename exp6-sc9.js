class Student {
    constructor(name, department) {
        this.name = name;
        this.department = department;

    }
    display() {
        console.log(`Name: ${this.name}, Department: ${this.department}`);
    }

}
const student1 = new Student("Sathvika", "CSE");
const student2 = new Student("kaniiiiiii", "CSE3");
student1.display();
student2.display();