let goals = [];

document.getElementById('goal-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const goalInput = document.getElementById('goal-input').value;
    const goalDate = document.getElementById('goal-date').value;
    const goalDescription = document.getElementById('goal-description').value;

    if (!goalInput || !goalDate) {
        alert('Please fill out all required fields.');
        return;
    }

    // Add goal to the goals array
    const goal = {
        name: goalInput,
        date: goalDate,
        description: goalDescription,
    };
    goals.push(goal);

    // Update the goal list
    updateGoalList();

    // Clear the form
    document.getElementById('goal-form').reset();
});

function updateGoalList() {
    const goalList = document.getElementById('goal-list');
    goalList.innerHTML = '';

    goals.forEach((goal, index) => {
        const goalCard = document.createElement('div');
        goalCard.className = 'goal-card';
        goalCard.innerHTML = `
            <h3>${goal.name}</h3>
            <p class="date">📅 ${goal.date}</p>
            <p>📝 ${goal.description}</p>
            <button onclick="deleteGoal(${index})">Delete</button>
        `;
        goalList.appendChild(goalCard);
    });
}

function deleteGoal(index) {
    goals.splice(index, 1); // Remove the goal from the array
    updateGoalList(); // Update the goal list
}

// Initialize
updateGoalList();