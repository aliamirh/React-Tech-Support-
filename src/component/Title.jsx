import React from 'react';



function Title() {
    var titleStyle = {
        
    };
    var titleImg ={
        float:'right',
        height:'500px',
        display: 'inline block'
    };
    var boxStyle = {
        position: 'relative',
        display: 'inline block',
        width: '100%',
    }
  return (
    <div style = {titleStyle}>
        <img src='https://www-tc.pbs.org/wgbh/nova/media/images/nova-wonders-can-we-build-a-brain-hero_xn7Rr8X.width-800.jpg' style = {titleImg}></img>
        <div>
            <h1 style = {boxStyle}>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget auctor velit. Donec libero dui, tincidunt vitae ante sit amet, eleifend convallis ex. Donec quis rhoncus arcu. In et euismod ante. Fusce in consectetur lorem. Curabitur blandit sed mi non luctus. Suspendisse vitae purus tincidunt, ornare augue non, tempus nunc. Vestibulum metus purus, fringilla nec pellentesque at, venenatis sed ante. Phasellus iaculis libero diam, ac mollis magna sodales non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed a lorem sed turpis varius dignissim nec vitae metus. Aenean sed erat id tortor viverra porttitor sed cursus sapien. Quisque rhoncus porttitor ligula, non sollicitudin lacus venenatis at.</p>
            <p> Nulla ut justo scelerisque, iaculis metus et, feugiat lacus. Duis a lorem vitae diam eleifend scelerisque at a lectus. Praesent facilisis commodo faucibus. Nunc faucibus ultrices luctus. Aenean viverra felis erat, eu iaculis neque tincidunt ut. Vestibulum imperdiet odio quis eros varius, quis sollicitudin tellus vehicula. Nam id bibendum magna. Morbi a pellentesque lorem. Nullam varius ex volutpat enim bibendum, id pharetra massa egestas. Integer orci elit, sodales sed purus vitae, fringilla aliquam ligula. Suspendisse in dolor pretium, dignissim lectus nec, ornare lacus. Praesent sodales id mi ac sodales. Proin imperdiet dapibus aliquet. Nulla laoreet a elit at rutrum.</p>
        </div>
        
    </div>
  );
}

export default Title;
