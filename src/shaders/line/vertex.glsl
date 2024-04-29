#include ../noise;

uniform float uOffset;

void main(){
    vec3 pos = position;
    pos.y += noise2D(vec2(pos.x + uOffset, 0.0) * 50.0) * 0.018;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
}