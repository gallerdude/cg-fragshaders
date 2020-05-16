#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 new_tex = vec2(texcoord.x * 2.0 - 1.0, texcoord.y * 2.0 - 1.0);
    float theta = atan(new_tex.y, new_tex.x);
    float radius = pow(length(new_tex), 1.5); 


    FragColor = texture(image, vec2(radius * cos(theta), radius * sin(theta)));
}
