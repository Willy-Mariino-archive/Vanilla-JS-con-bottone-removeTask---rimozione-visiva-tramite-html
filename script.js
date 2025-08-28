let tasks = [
    { id: 1, title: "Studiare React" },
    { id: 2, title: "Fare la spesa" },
    { id: 3, title: "Allenamento" }
];

// idToRemove = id della task
// btn = riferimento al bottone cliccato
function removeItemAndElement(idToRemove, btn) {

    // aggiorno l'array
    tasks = tasks.filter(item => item.id !== idToRemove);
    console.log("Task rimanenti:", tasks);

    // rimuovo anche l'elemento HTML
    const taskDiv = btn.parentElement; // il <div> che contiene testo + bottone
    taskDiv.remove();
}
