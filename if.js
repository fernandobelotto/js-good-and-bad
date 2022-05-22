function a() {
    console.log('a')
}

function b() {
    console.log('b')
}

if (false) a(); b();

// the question is:
// a and b are not called right?
// the answer is:
// b will be called

if (false) { a(); b();}
// then nor b or a will be called

// soo
// if (false) { a(); b();} !== if (false)  a(); b();