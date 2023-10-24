async function seedDatabase() {
    var testTodo1 = {
        title: 'Buy apples',
        description: 'At least 2KGs',
        isComplete: true
    };

    var testTodo2 = {
        title: 'Wash the apples',
        isComplete: true
    };

    var testTodo3 = {
        title: 'Cut the apples',
        description: 'Don\'t forget to pack them in a box',
        isComplete: false
    };

    await databases.createDocument(
        todoDatabase.$id,
        todoCollection.$id,
        sdk.ID.unique(),
        testTodo1
    );

    await databases.createDocument(
        todoDatabase.$id,
        todoCollection.$id,
        sdk.ID.unique(),
        testTodo2
    );

    await databases.createDocument(
        todoDatabase.$id,
        todoCollection.$id,
        sdk.ID.unique(),
        testTodo3
    );
}
