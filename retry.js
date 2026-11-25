function primitivemultiply(a, b) {
  if (a < 0 || b < 0) {
    throw new Error("Both numbers must be non-negative");
  }
  return a * b;
}
console.log(primitivemultiply(8, 8));
