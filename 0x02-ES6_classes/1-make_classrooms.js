import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const class1 = new ClassRoom();
  const class2 = new ClassRoom();
  const class3 = new ClassRoom();
  class1._maxStudentsSize = 19;
  class2._maxStudentsSize = 20;
  class3._maxStudentsSize = 34;
  return [class1, class2, class3];
}
