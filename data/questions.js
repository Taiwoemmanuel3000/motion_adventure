/**
 * ==========================================================
 * Motion Adventure - Physics Questions Database
 * File: data/questions.js
 * ==========================================================
 */


const levels = [1, 2, 3, 4, 5]; // Levels of difficulty

export const QUESTIONS = [

    /* ======================================================
       LEVEL 1 - DISTANCE & TIME
    ====================================================== */

    {
        id: 1,
        level: 1,
        category: "Distance",
        question: "A runner covers 100 m in 20 seconds. What is the speed?",
        options: ["2 m/s", "5 m/s", "10 m/s", "20 m/s"],
        answer: 1,
        explanation: "Speed = Distance ÷ Time = 100 ÷ 20 = 5 m/s"
    },

    {
        id: 2,
        level: 1,
        category: "Distance",
        question: "A car travels 200 m in 10 seconds. What is its speed?",
        options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
        answer: 2,
        explanation: "200 ÷ 10 = 20 m/s"
    },

    {
        id: 3,
        level: 1,
        category: "Distance",
        question: "How far will a cyclist travel at 8 m/s for 5 seconds?",
        options: ["20 m", "30 m", "40 m", "50 m"],
        answer: 2,
        explanation: "Distance = Speed × Time = 8 × 5 = 40 m"
    },

    {
        id: 4,
        level: 1,
        category: "Time",
        question: "A bus travels 150 m at 15 m/s. How long does it take?",
        options: ["5 s", "10 s", "15 s", "20 s"],
        answer: 1,
        explanation: "Time = Distance ÷ Speed = 150 ÷ 15 = 10 s"
    },

    {
        id: 5,
        level: 1,
        category: "Speed",
        question: "Speed is measured in:",
        options: ["kg", "m/s", "N", "J"],
        answer: 1,
        explanation: "The SI unit of speed is metres per second (m/s)."
    },

    /* ======================================================
       LEVEL 2 - VELOCITY
    ====================================================== */

    {
        id: 6,
        level: 2,
        category: "Velocity",
        question: "Velocity is speed with:",
        options: ["Mass", "Direction", "Force", "Energy"],
        answer: 1,
        explanation: "Velocity is speed in a specific direction."
    },

    {
        id: 7,
        level: 2,
        category: "Velocity",
        question: "A car moves east at 20 m/s. This describes:",
        options: ["Speed", "Velocity", "Acceleration", "Force"],
        answer: 1,
        explanation: "Velocity includes both speed and direction."
    },

    {
        id: 8,
        level: 2,
        category: "Velocity",
        question: "Which quantity has both magnitude and direction?",
        options: ["Speed", "Distance", "Velocity", "Time"],
        answer: 2,
        explanation: "Velocity is a vector quantity."
    },

    {
        id: 9,
        level: 2,
        category: "Displacement",
        question: "Displacement is the ____ distance between two points.",
        options: ["Longest", "Shortest", "Average", "Measured"],
        answer: 1,
        explanation: "Displacement is the shortest distance in a given direction."
    },

    {
        id: 10,
        level: 2,
        category: "Displacement",
        question: "Distance is a ____ quantity.",
        options: ["Vector", "Scalar", "Force", "Velocity"],
        answer: 1,
        explanation: "Distance has only magnitude."
    },

    /* ======================================================
       LEVEL 3 - ACCELERATION
    ====================================================== */

    {
        id: 11,
        level: 3,
        category: "Acceleration",
        question: "A car increases its speed from 10 m/s to 30 m/s in 5 s. Find the acceleration.",
        options: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"],
        answer: 1,
        explanation: "Acceleration = (30 - 10) ÷ 5 = 4 m/s²"
    },

    {
        id: 12,
        level: 3,
        category: "Acceleration",
        question: "Acceleration is measured in:",
        options: ["m", "m/s", "m/s²", "N"],
        answer: 2,
        explanation: "Acceleration uses metres per second squared."
    },

    {
        id: 13,
        level: 3,
        category: "Acceleration",
        question: "If velocity does not change, acceleration is:",
        options: ["10", "5", "1", "0"],
        answer: 3,
        explanation: "No change in velocity means zero acceleration."
    },

    {
        id: 14,
        level: 3,
        category: "Acceleration",
        question: "Acceleration is the rate of change of:",
        options: ["Distance", "Velocity", "Mass", "Force"],
        answer: 1,
        explanation: "Acceleration measures how quickly velocity changes."
    },

    {
        id: 15,
        level: 3,
        category: "Acceleration",
        question: "Negative acceleration is also called:",
        options: ["Friction", "Gravity", "Deceleration", "Momentum"],
        answer: 2,
        explanation: "Deceleration means slowing down."
    },

    /* ======================================================
       LEVEL 4 - MOTION
    ====================================================== */

    {
        id: 16,
        level: 4,
        category: "Motion",
        question: "Motion means:",
        options: [
            "Change in colour",
            "Change in position over time",
            "Increase in mass",
            "Increase in temperature"
        ],
        answer: 1,
        explanation: "Motion is a change in position with time."
    },

    {
        id: 17,
        level: 4,
        category: "Motion",
        question: "An object at rest has:",
        options: [
            "High speed",
            "Zero speed",
            "High velocity",
            "Maximum acceleration"
        ],
        answer: 1,
        explanation: "Objects at rest have zero speed."
    },

    {
        id: 18,
        level: 4,
        category: "Uniform Motion",
        question: "Uniform motion means:",
        options: [
            "Changing speed",
            "Constant speed",
            "Changing direction",
            "Zero distance"
        ],
        answer: 1,
        explanation: "Uniform motion means travelling at constant speed."
    },

    {
        id: 19,
        level: 4,
        category: "Non-uniform Motion",
        question: "A car speeding up is experiencing:",
        options: [
            "Uniform motion",
            "Non-uniform motion",
            "Rest",
            "Equilibrium"
        ],
        answer: 1,
        explanation: "Changing speed means non-uniform motion."
    },

    {
        id: 20,
        level: 4,
        category: "Motion",
        question: "Which instrument measures speed?",
        options: [
            "Thermometer",
            "Barometer",
            "Speedometer",
            "Voltmeter"
        ],
        answer: 2,
        explanation: "Speed is measured using a speedometer."
    },

    /* ======================================================
       LEVEL 5 - MIXED CHALLENGE
    ====================================================== */

    {
        id: 21,
        level: 5,
        category: "Mixed",
        question: "Average speed =",
        options: [
            "Distance × Time",
            "Distance ÷ Time",
            "Time ÷ Distance",
            "Velocity × Time"
        ],
        answer: 1,
        explanation: "Average speed = Total Distance ÷ Total Time."
    },

    {
        id: 22,
        level: 5,
        category: "Mixed",
        question: "Which is a vector quantity?",
        options: [
            "Distance",
            "Speed",
            "Velocity",
            "Time"
        ],
        answer: 2,
        explanation: "Velocity has magnitude and direction."
    },

    {
        id: 23,
        level: 5,
        category: "Mixed",
        question: "The SI unit of distance is:",
        options: [
            "Kilogram",
            "Second",
            "Metre",
            "Newton"
        ],
        answer: 2,
        explanation: "Distance is measured in metres."
    },

    {
        id: 24,
        level: 5,
        category: "Mixed",
        question: "A body moving with constant velocity has:",
        options: [
            "Positive acceleration",
            "Negative acceleration",
            "Zero acceleration",
            "Infinite acceleration"
        ],
        answer: 2,
        explanation: "Constant velocity means no acceleration."
    },

    {
        id: 25,
        level: 5,
        category: "Mixed",
        question: "If distance increases while time stays the same, speed:",
        options: [
            "Decreases",
            "Remains constant",
            "Increases",
            "Becomes zero"
        ],
        answer: 2,
        explanation: "More distance in the same time means higher speed."
    },

    {
        id: 26,
        level: 5,
        category: "Mixed",
        question: "What is the SI unit of time?",
        options: [
            "Minute",
            "Hour",
            "Second",
            "Day"
        ],
        answer: 2,
        explanation: "The SI unit of time is the second."
    },

    {
        id: 27,
        level: 5,
        category: "Mixed",
        question: "Which graph has a horizontal line for an object at rest?",
        options: [
            "Distance-Time Graph",
            "Velocity-Time Graph",
            "Both",
            "Neither"
        ],
        answer: 0,
        explanation: "A horizontal distance-time graph means no change in position."
    },

    {
        id: 28,
        level: 5,
        category: "Mixed",
        question: "Speed can never be:",
        options: [
            "Positive",
            "Zero",
            "Negative",
            "Measured"
        ],
        answer: 2,
        explanation: "Speed is always zero or positive."
    },

    {
        id: 29,
        level: 5,
        category: "Mixed",
        question: "The formula for speed is:",
        options: [
            "Time ÷ Distance",
            "Distance ÷ Time",
            "Distance × Time",
            "Velocity × Time"
        ],
        answer: 1,
        explanation: "Speed = Distance ÷ Time."
    },

    {
        id: 30,
        level: 5,
        category: "Boss Challenge",
        question: "Congratulations! Which physics topic did you master in this adventure?",
        options: [
            "Electricity",
            "Motion",
            "Heat",
            "Optics"
        ],
        answer: 1,
        explanation: "You completed the Motion Adventure!"
    }

];

/* ==========================================================
   HELPER FUNCTIONS
========================================================== */
