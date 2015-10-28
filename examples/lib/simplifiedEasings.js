export default {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => -1 * t * (t - 2),
  easeInOutQuad: t => (t *= 2, (t < 1) ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
  easeInCubic: t => t * t * t
}
