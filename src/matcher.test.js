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


