#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    
    float lum = (FragColor.x * 0.299) + (FragColor.y * 0.587) + (FragColor.z * .114);

    FragColor = vec4(lum, lum, lum, 1.0);
}
