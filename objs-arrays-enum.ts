// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Maximilian',
//     age: 31,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 'AUTHOR'
};

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1]

console.log(person);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}

if(person.role === Role.AUTHOR) {
    console.log("is read only");
}