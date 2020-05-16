#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    FragColor = FragColor * vec4(4.0, 4.0, 4.0, 1.0);
    FragColor = vec4(round(FragColor.x)/4.0, round(FragColor.y)/4.0, round(FragColor.z)/4.0, 1.0);
}
