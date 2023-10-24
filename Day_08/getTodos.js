async function getTodos() {
    var todos = await databases.listDocuments(
        todoDatabase.$id,
        todoCollection.$id
    );

    todos.documents.forEach(todo => {
        console.log(`Title: ${todo.title}\nDescription: ${todo.description}\nIs Todo Complete: ${todo.isComplete}\n\n`);
    });
}

async function runAllTasks() {
    await prepareDatabase();
    await seedDatabase();
    await getTodos();
}
runAllTasks();
