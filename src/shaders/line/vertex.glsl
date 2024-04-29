void main(){
    vec3 pos = position;
    pos.y += sin(pos.x * 30.0) * 0.015;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
}