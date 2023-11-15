uniform float wireframeThickness;
uniform float time;
varying vec3 vertexNormal;

varying vec3 vNormal;
varying vec4 vViewPosition;
varying vec3 vertexColor;
varying vec2 vertexUV;
varying vec3 vertexPosition;
uniform vec2 pixels;

void main() {

    gl_FragColor = vec4(vertexUV, 0.0, 1.0);
    gl_FragColor = vec4(vertexColor, 1.);
}
