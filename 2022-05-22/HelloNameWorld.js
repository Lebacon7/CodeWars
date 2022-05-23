function hello(name='World') {
    let name2 = name.toLowerCase();
    let name3 = name2.charAt(0).toUpperCase() + name2.slice(1);
    return (name!='')?`Hello, ${name3}!`: `Hello, World!`;
  }
console.log(hello())