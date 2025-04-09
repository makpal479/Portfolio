document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseDiv = document.getElementById("form-response");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            responseDiv.style.display = "block";
            responseDiv.innerHTML = `<p>Спасибо, ${name}! Ваше сообщение отправлено.</p>`;
            form.reset(); 
        }
    });
});

 // Кликер
        let score = 0, timeLeft = 30, timer, Paused = false, Running = false;
        let record = Number(localStorage.getItem("clickerRecord")) || 0;
        document.getElementById("record").textContent = record;
        document.getElementById("startBtn").onclick = function() {
            Running = true;
            document.getElementById("clickBtn").disabled = false;
            document.getElementById("pauseBtn").disabled = false;
            this.disabled = true;
            timer = setInterval(() => {
                if (timeLeft > 0 && !Paused) {
                    timeLeft--;
                    document.getElementById("time").textContent = timeLeft;
                } else if (timeLeft === 0) {
                    clearInterval(timer);
                    Running = false;
                    document.getElementById("clickBtn").disabled = true;
                    alert(`Время вышло! Ваш счёт: ${score}`);
                    if (score > record) {
                        record = score;
                        localStorage.setItem("clickerRecord", record);
                        document.getElementById("record").textContent = record;
                    }
                }
            }, 1000);
        }
        document.getElementById("clickBtn").onclick = function() {
            if (timeLeft > 0 && !Paused) {
                score++;
                document.getElementById("score").textContent = score;
            }
        }
        document.getElementById("pauseBtn").onclick = function() {
            if (!Running) return;
            Paused = !Paused;
            this.textContent = Paused ? "Продолжить" : "Пауза";
        }
        document.getElementById("resetBtn").onclick = function() {
            score = 0; timeLeft = 30; Paused = false; Running = false;
            document.getElementById("score").textContent = score;
            document.getElementById("time").textContent = timeLeft;
            document.getElementById("pauseBtn").textContent = "Пауза";
            document.getElementById("clickBtn").disabled = true;
            document.getElementById("pauseBtn").disabled = true;
            document.getElementById("startBtn").disabled = false;
            clearInterval(timer);
        }

        // Генератор приключений
const characters = [
    { name: "Хоббит", prep: "Хоббитом" },
    { name: "Гондорец", prep: "Гондорцем" },
    { name: "Эльф Лориэна", prep: "Эльфом Лориэна" },
    { name: "Дунадaйн", prep: "Дунадaйном" },
    { name: "Гном из Эребора", prep: "Гномом из Эребора" },
    { name: "Леголас", prep: "Леголасом" },
    { name: "Гэндальф", prep: "Гэндальфом" }
];

const locations = [
    { name: "Шир", prep: "Шире" },
    { name: "Минас Тирит", prep: "Минас Тирите" },
    { name: "Лориэн", prep: "Лориэне" },
    { name: "Мория", prep: "Мории" },
    { name: "Ородруин", prep: "Ородруине" }
];

const villains = [
    { name: "Саурон", prep: "Сауроном" },
    { name: "Назгул", prep: "Назгулом" },
    { name: "Шелоб", prep: "Шелоб" },
    { name: "Саруман", prep: "Саруманом" },
    { name: "Урук-хай", prep: "Урук-хаем" }
];

        function getRandomElement(array) {
            return array[Math.floor(Math.random() * array.length)];
        }
        function generateAdventure() {
            const ch = getRandomElement(characters);
            const loc = getRandomElement(locations);
            const vil = getRandomElement(villains);
            const text = `Ваш персонаж - ${ch.name}, в ${loc.prep}, сражается с ${vil.prep}.`;
            document.getElementById("adventure").textContent = text;
            saveToHistory(text);
        }
        function saveToHistory(a) {
            let h = JSON.parse(localStorage.getItem("adventureHistory")) || [];
            h.push(a);
            localStorage.setItem("adventureHistory", JSON.stringify(h));
            updateHistoryUI();
        }
        function updateHistoryUI() {
            const list = document.getElementById("history");
            list.innerHTML = "";
            let h = JSON.parse(localStorage.getItem("adventureHistory")) || [];
            h.forEach(entry => {
                let li = document.createElement("li");
                li.textContent = entry;
                list.appendChild(li);
            });
        }
        function clearHistory() {
            localStorage.removeItem("adventureHistory");
            updateHistoryUI();
        }
        updateHistoryUI();

        // Угадай число
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        let attemptsLeft = 10;
        function checkGuess() {
            let guess = parseInt(document.getElementById("guessInput").value);
            let msg = document.getElementById("message");
            if (isNaN(guess) || guess < 1 || guess > 100) {
                msg.textContent = "Введите число от 1 до 100!";
                return;
            }
            attemptsLeft--;
            document.getElementById("attempts").textContent = attemptsLeft;
            if (guess === randomNumber) {
                msg.textContent = "Поздравляем! Вы угадали число!";
                disableInput();
            } else if (guess < randomNumber) {
                msg.textContent = "Число больше!";
            } else {
                msg.textContent = "Число меньше!";
            }
            if (attemptsLeft === 0 && guess !== randomNumber) {
                msg.textContent = `Вы проиграли! Загаданное число: ${randomNumber}.`;
                disableInput();
            }
        }
        function disableInput() {
            document.getElementById("guessInput").disabled = true;
        }
        function resetGame() {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attemptsLeft = 10;
            document.getElementById("attempts").textContent = attemptsLeft;
            document.getElementById("message").textContent = "";
            document.getElementById("guessInput").value = "";
            document.getElementById("guessInput").disabled = false;
        }
