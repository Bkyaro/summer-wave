#include ../noise;

void main(){
    vec3 pos = position;
    pos.y += noise2D(vec2(pos.x, 0.0) * 50.0) * 0.018;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
}