test("2+2=4", function() {
    expect(2 + 2).toBe(4);
});

test('test object argument', () => {
    let object = {
        "one": 1
    };
    
    object['two'] = 2;


    expect(object).toEqual({"one": 1, "two": 2});
});

test("adding positive numbers is not zero", function() {
    for(let a=1; a<10; a++)
    {
        for(let b=2; b<10; b++)
        {
            expect(a + b).not.toBe(0);
        }
    }
});

test("null",function(){
    let n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test("zero", function() {
    let z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test("2+2",function() {
    let value = 2+2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    
    expect(value).toBe(4);
    expect(value).toEqual(4);
});


test("adding floating point numbers", function() {
    let value = 0.1 + 0.2;
    expect(value).not.toBe(0.3);
    expect(value).toBeCloseTo(0.3);
});

test("there is no I in team", function() {
    expect("team").not.toMatch(/I/);
});

test("but there is a 'stop' in Christoph", function() {
    expect("Christoph").toMatch(/stop/);
});

let shoppingList = ["beer", "paper towels"];

test("the shopping list has beer on it", function() {
    expect(shoppingList).toContain("beer");
});

// function compileAndroidCode()
// {
//     throw new ConfigError("you are using the wrong JDK");
// }
// 
// test("compiling android goes as expected", function() {
//     expect(compileAndroidCode).toThrow();
//     expect(compileAndroidCode).toThrow(ConfigError);
//     expect(compileAndroidCode).toThrow("you are using the woring JDK");
//     expect(compileAndroidCode).toThrow(/JDK/);
// });





