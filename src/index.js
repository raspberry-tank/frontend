import 'joypad.js';
joypad.on('connect', e => {
    const { id } = e.gamepad;
 
    console.log(`${id} connected!`);
});

joypad.on('button_press', e => {
    const { buttonName } = e.detail;
 
    console.log(`${buttonName} was pressed!`);
});

joypad.on('axis_move', e => {
  const { directionOfMovement, stickMoved } = e.detail;
  console.log(directionOfMovement);
});
