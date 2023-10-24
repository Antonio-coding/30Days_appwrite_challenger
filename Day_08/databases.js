const databases = new sdk.Databases(client);

var todoDatabase;
var todoCollection;

async function prepareDatabase() {
    todoDatabase = await databases.create(
        sdk.ID.unique(),
        'TodosDB'
    );

    todoCollection = await databases.createCollection(
        todoDatabase.$id,
        sdk.ID.unique(),
        'Todos'
    );

    await databases.createStringAttribute(
        todoDatabase.$id,
        todoCollection.$id,
        'title',
        255,
        true
    );

    await databases.createStringAttribute(
        todoDatabase.$id,
        todoCollection.$id,
        'description',
        255, false,
        'This is a test description'
    );

    await databases.createBooleanAttribute(
        todoDatabase.$id,
        todoCollection.$id,
        'isComplete',
        true
    );
}
