// Import the ClassRoom class
import ClassRoom from "./0-classroom.js";

// initializeRooms function
export default function initializeRooms() {
  // Create an array of ClassRoom objects with different sizes
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];

  return rooms;
}
