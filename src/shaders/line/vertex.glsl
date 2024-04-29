#include ../noise;

uniform float uOffset;
uniform float uTime;

void main(){
    vec3 pos = position;

    float flatnessAmplitude = pow(1.0 - abs(uv.x - 0.5) * 2.0, 3.5);

    pos.y += noise2D(vec2(pos.x + uOffset, uTime) * 50.0) * 0.018;
    pos.y += noise2D(vec2(pos.x + uOffset, uTime) * 1000.0) * 0.1 * flatnessAmplitude;
    pos.y += pow(noise2D(vec2(pos.x + uOffset, uTime) * 2.5) + 1.0, 1.2) * 0.55 * flatnessAmplitude;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
}