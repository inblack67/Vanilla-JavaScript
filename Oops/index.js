function hello() {
    console.log(this);
    const hell = () => {
        console.log(this);
    }
    hell()
}

const o1 = new hello();