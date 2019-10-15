import 'joypad.js';
joypad.on('connect', e => {
    const { id } = e.gamepad;
 
    console.log(`${id} connected!`);
});
