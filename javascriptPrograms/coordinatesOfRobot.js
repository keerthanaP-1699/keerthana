/**
 * This robot roams around a 2D grid. It starts at (0, 0) facing North.
 * After each time it moves, the robot rotates 90 degrees clockwise.
 * Given the amount the robot has moved each time, you have to calculate the robot's final position.
 * To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:
 * 20 steps North, now at (0, 20)
 * 30 steps East, now at (30, 20)
 * 10 steps South. now at (30, 10)
 * 40 steps West, now at (-10, 10)
 * ...and will end up at coordinates (-10, 10).
 * Example:-
 * trackRobot(20, 30, 10, 40) ➞ [-10, 10]
 * trackRobot() ➞ [0, 0]
 *  No movement means the robot stays at (0, 0).
 * trackRobot(-10, 20, 10) ➞ [20, -20]
 *  The amount to move can be negative.
 */

const trackRobot = () => {
  let position = [0, 0];
  let len = arguments.length;
  for (let i = 0; i < len; i++) {
    if (i % 4 === 0 || i === 0) {
      position[1] += arguments[i];
    } else if (i % 4 === 1 || i === 1) {
      position[0] += arguments[i];
    } else if (i % 4 === 2 || i === 2) {
      position[1] -= arguments[i];
    } else if (i % 4 === 3 || i === 3) {
      position[0] -= arguments[i];
    }
  }
  console.log(position);
};

trackRobot(40, 20);
trackRobot(10, 20, 30);
trackRobot(-10, 20, 10, -30, 50, 60, 10);
trackRobot(0, 0);
trackRobot();
