<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SIYA CMA Preparation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>📘 SIYA CMA Preparation</h1>
    <p id="countdown"></p>
    <nav>
      <button onclick="showSection('dashboard')">Dashboard</button>
      <button onclick="showSection('study')">Study Plan</button>
      <button onclick="showSection('quiz')">Quiz</button>
    </nav>
  </header>

  <section id="dashboard">
    <h2>Dashboard</h2>
    <p>Welcome to your CMA Intermediate prep! Track progress and start learning.</p>
  </section>

  <section id="study" class="hidden">
    <h2>📅 Study Plan</h2>
    <ul id="study-list"></ul>
  </section>

  <section id="quiz" class="hidden">
    <h2>📝 MCQ Quiz</h2>
    <div id="quiz-container"></div>
    <button onclick="nextQuestion()">Next</button>
  </section>

  <script src="script.js"></script>
</body>
</html>
