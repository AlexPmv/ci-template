export default function checkHealth(characterObj) {
  if (characterObj.health >= 50) {
    return 'healthy';
  } if (characterObj.health >= 15 && characterObj.health < 50) {
    return 'wounded';
  } if (characterObj.health < 15) {
    return 'critical';
  }

  return 'error, there is no health';
}
