uniform float wireframeThickness;
uniform float time;
varying vec2 vertexUV;
varying vec3 vertexPosition;
varying vec3 vertexColor;
uniform vec2 pixels;
varying vec3 vertexNormal;

vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //  x0 = x0 - 0. + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));

// Gradients
// ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);    // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {

  vec3 colors[6];
  colors[0] = vec3(1, 0.2, 0.2);    // Red
  colors[1] = vec3(0.60, 0.25, 1);  // Purple
  colors[2] = vec3(0.55, 0.89, 1.0); // Cyan
  colors[3] = vec3(1.0, 0.85, 0.30); // Orange
  colors[4] = vec3(0.26, 0.97, 0.64); // Green
  colors[5] = vec3(0.97, 0.26, 0.55); // Red-pink

//vertex
  vec2 noiseCoord = uv * vec2(3., 4.);

  float tilt = -0.9 * uv.y;

  float incline = uv.x * 0.9;

  float offset = incline * mix(-0.25, 0.25, uv.y);

  float noise = snoise(vec3(noiseCoord.x + time * 4., noiseCoord.y, time * 5.));

  noise = max(0., noise);

  vec3 pos = vec3(position.x, position.y, position.z + noise * 3.4 + tilt + incline + offset);

  //color
  vertexColor = vec3(0.8, 0.62, 1.0);

  for(int i = 0; i < 6; i++) {

    float noiseFlow = 7. + float(i) * 0.4;
    float noiseSpeed = 8. + float(i) * 0.4;
    float noiseSeed = 1. + float(i) * 12.;
    vec2 noiseFreq = vec2(0.65, 0.8) * 0.6;

    float noiseFloor = 0.1;
    float noiseCeil = 0.6 + float(i) * 0.09;

    float noise = smoothstep(noiseFloor, noiseCeil, snoise(vec3(noiseCoord.x * noiseFreq.x + time * noiseFlow, noiseCoord.y * noiseFreq.y, time * noiseSpeed + noiseSeed)));

    //vertexColor = mix(vec3(0.50, 0.15, 1), colors[i], noise);
    vertexColor = mix(vertexColor, colors[i], noise);
  }

  vertexUV = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}